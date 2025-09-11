import type { MyReposQuery } from '@/api/relay/generated/MyReposQuery.graphql';
import type {
  MyRepos_RepositoryFragment$data,
  MyRepos_RepositoryFragment$key,
} from '@/api/relay/generated/MyRepos_RepositoryFragment.graphql';
import Table from '@/components/Table';
import { Link, Route as TanStackRoute } from '@tanstack/react-router';
import { type ColumnDef } from '@tanstack/react-table';
import { graphql, useFragment, useLazyLoadQuery } from 'react-relay';
import { Route as rootRoute } from './__root';

const MyRepos_RepositoryFragment = graphql`
  fragment MyRepos_RepositoryFragment on Repository {
    id
    name
    nameWithOwner
    description
    stargazerCount
    visibility
    primaryLanguage {
      name
    }
  }
`;

function MyReposComponent() {
  const data = useLazyLoadQuery<MyReposQuery>(
    graphql`
      query MyReposQuery {
        viewer {
          repositories(
            first: 50
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              ...MyRepos_RepositoryFragment
            }
          }
        }
      }
    `,
    {},
    { fetchPolicy: 'store-and-network' }
  );

  const repositories =
    data.viewer.repositories.nodes
      ?.filter(Boolean)
      .map((repoRef) =>
        useFragment(
          MyRepos_RepositoryFragment,
          repoRef as MyRepos_RepositoryFragment$key
        )
      ) || [];

  const columns: ColumnDef<MyRepos_RepositoryFragment$data>[] = [
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

export const Route = new TanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/my-repos',
  component: MyReposComponent,
});
