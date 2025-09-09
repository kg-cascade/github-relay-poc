import { graphql, useLazyLoadQuery, useFragment } from 'react-relay';
import type { MyReposQuery } from './__generated__/MyReposQuery.graphql';
import { RepositoryFragment } from '../fragments/RepositoryFragment';
import type { RepositoryFragment$key } from '../fragments/__generated__/RepositoryFragment.graphql';
import type { RepositoryFragment$data } from '../fragments/__generated__/RepositoryFragment.graphql';
import Table from '@/components/Table';
import { type ColumnDef } from '@tanstack/react-table';
import { Link } from '@tanstack/react-router';

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

  const repositories = data.viewer.repositories.nodes?.filter(Boolean).map(repoRef => useFragment(RepositoryFragment, repoRef as RepositoryFragment$key)) || [];

  const columns: ColumnDef<RepositoryFragment$data>[] = [
    {
      id: '#',
      header: '#',
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: 'nameWithOwner',
      header: 'Name',
      cell: ({ row }) => (
        <Link
          to="/repo/$repoId"
          params={{ repoId: row.original.id }}
          className="text-blue-500 hover:underline"
        >
          {row.original.nameWithOwner}
        </Link>
      ),
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
    {
      accessorKey: 'visibility',
      header: 'Visibility',
    },
  ];

  return (
    <div className="p-2">
      <h3 className="text-test text-2xl font-bold mb-4">My Repositories</h3>
      {repositories.length > 0 ? (
        <Table columns={columns} data={repositories} />
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}

export default MyRepos;