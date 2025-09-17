import type { myReposQuery } from '@/api/relay/generated/myReposQuery.graphql';
import type {
  myRepos_RepositoryFragment$data,
  myRepos_RepositoryFragment$key,
} from '@/api/relay/generated/myRepos_RepositoryFragment.graphql';
import Table from '@/shared/components/Table';
import { useInView } from '@/shared/hooks/useInView';
import { Link, createFileRoute } from '@tanstack/react-router';
import { type ColumnDef } from '@tanstack/react-table';
import { graphql, useFragment, useLazyLoadQuery } from 'react-relay';

const myRepos_RepositoryFragment = graphql`
  fragment myRepos_RepositoryFragment on Repository {
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
  const data = useLazyLoadQuery<myReposQuery>(
    graphql`
      query myReposQuery {
        viewer {
          repositories(
            first: 50
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              ...myRepos_RepositoryFragment
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
          myRepos_RepositoryFragment,
          repoRef as myRepos_RepositoryFragment$key
        )
      ) || [];

  const columns: ColumnDef<myRepos_RepositoryFragment$data>[] = [
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

  const { ref } = useInView<HTMLDivElement>();

  return (
    <div className="h-screen" ref={ref}>
      <h3 className="text-test text-2xl font-bold mb-4">My Repositories</h3>
      {repositories.length > 0 ? (
        <Table columns={columns} data={repositories} />
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}

export const Route = createFileRoute('/my-repos/')({
  component: MyReposComponent,
});
