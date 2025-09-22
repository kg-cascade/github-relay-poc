import type { UserNameQuery } from '@/api/relay/generated/UserNameQuery.graphql';
import PageSuspense from '@/shared/components/PageSuspense';
import { createFileRoute } from '@tanstack/react-router';
import { Rocket } from 'lucide-react';
import { Suspense } from 'react';
import {
  graphql,
  loadQuery,
  usePreloadedQuery,
  type PreloadedQuery,
} from 'react-relay';
import { type Environment as RelayEnvironmentType } from 'relay-runtime';
import OrganizationsList from './-components/Organizations';
import TopUserRepo from './-components/TopUserRepo';
import ContributionHeatmap from './-components/ContributionHeatmap';

const UserQuery = graphql`
  query UserNameQuery($userName: String!) {
    user(login: $userName) {
      id
      login
      name
      avatarUrl
      createdAt
      bio
      company
      location
      url
      websiteUrl
      email
      ...OrganizationsList_user
      ...TopUserRepo_user
      ...ContributionHeatmap_user
    }
  }
`;

interface RouterContext {
  relayEnvironment: RelayEnvironmentType;
}

export const Route = createFileRoute('/$userName/')({
  loader: ({ context, params }) => {
    const relayEnvironment = (context as RouterContext).relayEnvironment;
    const preloadedQuery: PreloadedQuery<UserNameQuery> = loadQuery(
      relayEnvironment,
      UserQuery,
      { userName: params.userName }
    );
    return { preloadedQuery };
  },
  component: () => {
    return (
      <Suspense fallback={<PageSuspense />}>
        <UserProfile />
      </Suspense>
    );
  },
});

function UserProfile() {
  const { preloadedQuery } = Route.useLoaderData() as {
    preloadedQuery: PreloadedQuery<UserNameQuery>;
  };

  const data = usePreloadedQuery<UserNameQuery>(UserQuery, preloadedQuery);
  const user = data.user;

  if (!user) {
    return <div>User &quot;{Route.useParams().userName}&quot; not found.</div>;
  }

  console.log('USER', user);

  return (
    <div className="flex gap-6 ">
      <div className="flex flex-col gap-4 w-1/3">
        <img
          src={user.avatarUrl}
          alt={`${user.login} avatar`}
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold">{user.name || user.login}</h1>
        {user.bio && <p className="text-gray-500">{user.bio}</p>}
        {user.location && <p className="mt-2">Location: {user.location}</p>}
        {user.company && <p className="mt-2">Company: {user.company}</p>}
        <div className="flex gap-2 items-center">
          <Rocket height={24} width={24} />
          Joined {new Date(user.createdAt).toLocaleDateString()}
        </div>
        <OrganizationsList user={user} />
      </div>
      <div>
        <a
          href={user.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4"
        >
          View on GitHub
        </a>
        <TopUserRepo user={user} />
        <div className="mt-8">
          <ContributionHeatmap user={user} />
        </div>
      </div>
    </div>
  );
}