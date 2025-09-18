import type { UserNameQuery } from '@/api/relay/generated/UserNameQuery.graphql';
import PageSuspense from '@/shared/components/PageSuspense';
import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import {
  graphql,
  loadQuery,
  usePreloadedQuery,
  type PreloadedQuery,
} from 'react-relay';
import { type Environment as RelayEnvironmentType } from 'relay-runtime';

const UserQuery = graphql`
  query UserNameQuery($userName: String!) {
    user(login: $userName) {
      id
      login
      name
      avatarUrl
      bio
      company
      location
      url
      websiteUrl
      email
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

  return (
    <div className="flex flex-col items-center p-8">
      <img
        src={user.avatarUrl}
        alt={`${user.login} avatar`}
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold">{user.name || user.login}</h1>
      {user.bio && <p className="text-gray-500">{user.bio}</p>}
      {user.location && <p className="mt-2">Location: {user.location}</p>}
      {user.company && <p className="mt-2">Company: {user.company}</p>}
      <a
        href={user.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-4"
      >
        View on GitHub
      </a>
    </div>
  );
}
