import { graphql, useLazyLoadQuery, useFragment } from 'react-relay';
import type { MyReposQuery } from './__generated__/MyReposQuery.graphql';
import { RepositoryFragment } from '../fragments/RepositoryFragment';
import type { RepositoryFragment$key } from '../fragments/__generated__/RepositoryFragment.graphql';
import type { RepositoryFragment$data } from '../fragments/__generated__/RepositoryFragment.graphql';

function MyRepos() {
  const data = useLazyLoadQuery<MyReposQuery>(
    graphql`
      query MyReposQuery {
        viewer {
          repositories(
            first: 50
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              ...RepositoryFragment
            }
          }
        }
      }
    `,
    {}
  );

  const repositories = data.viewer.repositories.nodes?.filter(Boolean) || [];

  return (
    <div className="p-2">
      <h3 className="text-test text-2xl font-bold mb-4">My Repositories</h3>
      {repositories.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="py-2 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Name
                </th>
                <th className="py-2 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Description
                </th>
                <th className="py-2 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Stars
                </th>
                <th className="py-2 px-4 text-left text-gray-600 dark:text-gray-300 font-semibold">
                  Language
                </th>
              </tr>
            </thead>
            <tbody>
              {repositories.map((repoRef) => {
                const repo: RepositoryFragment$data = useFragment(RepositoryFragment, repoRef as RepositoryFragment$key);
                return (
                  <tr
                    key={repo.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="py-2 px-4">{repo.nameWithOwner}</td>
                    <td className="py-2 px-4">
                      {repo.description || 'No description'}
                    </td>
                    <td className="py-2 px-4">{repo.stargazerCount}</td>
                    <td className="py-2 px-4">
                      {repo.primaryLanguage?.name || 'N/A'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}

export default MyRepos;
