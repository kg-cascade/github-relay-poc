import type { RepoIdQuery } from '@/api/relay/generated/RepoIdQuery.graphql';
import noAvatarSvg from '@/shared/assets/images/no-avatar.svg';
import PageSuspense from '@/shared/components/PageSuspense';
import Card from '@/shared/components/ui/Card';
import { Avatar } from '@ark-ui/react/avatar';
import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

export const Route = createFileRoute('/repo/$repoId')({
  component: () => (
    <Suspense fallback={<PageSuspense />}>
      <RepoPage />
    </Suspense>
  ),
});

function RepoPage() {
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
    <Card>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
        <Avatar.Root className="mb-4 h-16 w-16 sm:mr-4 sm:mb-0">
          <Avatar.Image
            className="rounded-full"
            src={repo.owner?.avatarUrl}
            alt={repo.owner?.login}
          />
          <Avatar.Fallback>
            <img src={noAvatarSvg} alt="No Avatar" />
          </Avatar.Fallback>
        </Avatar.Root>
        <div>
          <h1 className="text-foreground text-2xl font-bold break-words">
            {repo.nameWithOwner}
          </h1>
          <p className="text-gray-600">{repo.description}</p>
        </div>
      </div>
      <div className="flex flex-col text-sm text-gray-500 sm:flex-row sm:items-center">
        <div className="mb-2 sm:mr-4 sm:mb-0">
          <strong>{repo.stargazerCount}</strong> stars
        </div>
        <div className="mb-2 sm:mr-4 sm:mb-0">
          <strong>{repo.forkCount}</strong> forks
        </div>
        {repo.primaryLanguage && (
          <div className="mb-2 sm:mr-4 sm:mb-0">
            {repo.primaryLanguage.name}
          </div>
        )}
        {repo.licenseInfo && (
          <div className="mb-2 sm:mb-0">{repo.licenseInfo.name}</div>
        )}
      </div>
    </Card>
  );
}
