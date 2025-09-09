import { createFileRoute } from '@tanstack/react-router';
import { graphql, useLazyLoadQuery } from 'react-relay';
import type { RepoIdQuery } from './__generated__/RepoIdQuery.graphql';

export const Route = createFileRoute('/repo/$repoId')({
  component: RepoComponent,
});

function RepoComponent() {
  const { repoId } = Route.useParams();
  const data = useLazyLoadQuery<RepoIdQuery>(
    graphql`
      query RepoIdQuery($repoId: ID!) {
        node(id: $repoId) {
          ... on Repository {
            nameWithOwner
            description
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
            licenseInfo {
              name
            }
            owner {
              login
              avatarUrl
            }
          }
        }
      }
    `,
    { repoId }
  );

  if (!data.node) {
    return <div>Repository not found</div>;
  }

  const repo = data.node;

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img
          src={repo.owner.avatarUrl}
          alt={repo.owner.login}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{repo.nameWithOwner}</h1>
          <p className="text-gray-600">{repo.description}</p>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <div className="mr-4">
          <strong>{repo.stargazerCount}</strong> stars
        </div>
        <div className="mr-4">
          <strong>{repo.forkCount}</strong> forks
        </div>
        {repo.primaryLanguage && (
          <div className="mr-4">{repo.primaryLanguage.name}</div>
        )}
        {repo.licenseInfo && <div>{repo.licenseInfo.name}</div>}
      </div>
    </div>
  );
}
