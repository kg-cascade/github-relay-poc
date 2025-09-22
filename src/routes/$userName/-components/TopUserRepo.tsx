import type { TopUserRepo_user$key } from '@/api/relay/generated/TopUserRepo_user.graphql';
import Card from '@/shared/components/ui/Card';
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';

const TopUserRepoSchema = graphql`
  fragment TopUserRepo_user on User {
    topRepositories(first: 5, orderBy: { field: STARGAZERS, direction: DESC }) {
      nodes {
        name
        visibility
        stargazerCount
        primaryLanguage {
          name
        }
      }
    }
  }
`;

type Props = {
  user: TopUserRepo_user$key;
};

export default function TopUserRepo(props: Props) {
  const { topRepositories } = useFragment(TopUserRepoSchema, props.user);

  const repos = topRepositories?.nodes || [];

  return (
    <div>
      <p>Popular repositories</p>
      <Card>
        {repos.map((repo, idx) =>
          repo ? (
            <div key={repo.name + idx} className="w-md">
              <h3>{repo.name}</h3>
              <p>Stars: {repo.stargazerCount}</p>
              <p>Visibility: {repo.visibility}</p>
              <p>
                Language:{' '}
                {repo.primaryLanguage?.name ?? (
                  <span className="text-gray-400">Unknown</span>
                )}
              </p>
            </div>
          ) : null
        )}
      </Card>
    </div>
  );
}
