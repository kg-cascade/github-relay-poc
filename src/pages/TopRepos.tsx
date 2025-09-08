import Spinner from '@/components/Spinner';
import Table from '@/components/Table';
import { type ColumnDef } from '@tanstack/react-table';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import type { TopReposQuery } from './__generated__/TopReposQuery.graphql';

// Extract the Repository type from the generated GraphQL types
type Repository = NonNullable<
  TopReposQuery['response']['search']['nodes']
>[number];

// Define columns for TanStack Table
const columns: ColumnDef<Repository>[] = [
  {
    accessorKey: 'nameWithOwner',
    header: 'Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => row.original?.description || 'No description',
  },
  {
    accessorKey: 'stargazerCount',
    header: 'Stars',
  },
  {
    accessorKey: 'primaryLanguage.name',
    header: 'Language',
    cell: ({ row }) => row.original?.primaryLanguage?.name || 'N/A',
  },
];

function TopRepositories() {
  const data = useLazyLoadQuery<TopReposQuery>(
    graphql`
      query TopReposQuery {
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

  // Filter out any null nodes from the GraphQL response
  const tableData =
    data.search.nodes?.filter((node): node is Repository => node !== null) ||
    [];

  return (
    <div className="p-2">
      <h3 className="text-test text-2xl font-bold mb-4">Top Repositories</h3>
      <h4 className="text-xl font-semibold mb-2">
        Top 100 Repositories (by stars)
      </h4>
      {tableData.length > 0 ? (
        <Table columns={columns} data={tableData} />
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}

export default function TopReposPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-96">
          <Spinner size="large" />
        </div>
      }
    >
      <TopRepositories />
    </Suspense>
  );
}