import { createFileRoute } from '@tanstack/react-router';
import { graphql, useLazyLoadQuery } from 'react-relay';
import Spinner from '../components/Spinner';
import Button from '../components/Button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const data = useLazyLoadQuery(
    graphql`
      query routes_indexQuery {
        search(query: "stars:>1000", type: REPOSITORY, first: 100) {
          nodes {
            ... on Repository {
              id
              name
              nameWithOwner
              description
              stargazerCount
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    `,
    {}
  );

  return (
    <div className="p-2">
      <h3 className="text-test text-2xl font-bold mb-4">Top Repositories</h3>
      <h4 className="text-xl font-semibold mb-2">
        Top 100 Repositories (by stars)
      </h4>
      <div className="flex justify-center items-center my-4 space-x-4">
        <Spinner size="large" className="text-blue-500" />
        <Button colorScheme="primary">Solid</Button>
        <Button colorScheme="secondary">Solid Secondary</Button>
        <Button colorScheme="accent" variant="outline">
          Outline
        </Button>
        <Button colorScheme="success" variant="ghost">
          Ghost
        </Button>
        <Button colorScheme="error" variant="link">
          Link
        </Button>

        <div>this is card</div>
      </div>
      {data.search.nodes.length > 0 ? (
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
              {data.search.nodes.map((repo) => (
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
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}
