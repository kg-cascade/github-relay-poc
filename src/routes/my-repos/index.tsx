import type { myReposPaginationFragment$key } from '@/api/relay/generated/myReposPaginationFragment.graphql';
import type { myReposQuery } from '@/api/relay/generated/myReposQuery.graphql';
import type {
  myRepos_RepositoryFragment$data,
  myRepos_RepositoryFragment$key,
} from '@/api/relay/generated/myRepos_RepositoryFragment.graphql';
import Table from '@/shared/components/Table';
import { useInView } from '@/shared/hooks/useInView';
import { Link, createFileRoute } from '@tanstack/react-router';
import { type ColumnDef } from '@tanstack/react-table';
import {
  graphql,
  useFragment,
  useLazyLoadQuery,
  usePaginationFragment,
} from 'react-relay';

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

const myReposPaginationFragment = graphql`
  fragment myReposPaginationFragment on User
  @refetchable(queryName: "myReposPaginationQuery") {
    repositories(
      first: $first
      after: $after
      orderBy: { field: UPDATED_AT, direction: DESC }
    ) @connection(key: "myRepos_repositories") {
      edges {
        node {
          ...myRepos_RepositoryFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

function MyReposComponent() {
  const data = useLazyLoadQuery<myReposQuery>(
    graphql`
      query myReposQuery($first: Int = 10, $after: String) {
        viewer {
          ...myReposPaginationFragment
        }
      }
    `,
    { first: 10 }
  );

  const {
    data: viewerData,
    // loadNext,
    // hasNext,
  } = usePaginationFragment(
    myReposPaginationFragment,
    data.viewer as myReposPaginationFragment$key
  );

  const repositories =
    viewerData.repositories.edges?.map(
      (edge) =>
        edge?.node &&
        useFragment(
          myRepos_RepositoryFragment,
          edge.node as myRepos_RepositoryFragment$key
        )
    ) || [];

  const columns: ColumnDef<
    myRepos_RepositoryFragment$data | null | undefined
  >[] = [
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
          params={{ repoId: row?.original?.id ?? '' }}
          className="text-blue-500 hover:underline"
        >
          {row?.original?.nameWithOwner ?? 'N/A'}
        </Link>
      ),
    },
    {
      accessorKey: 'description',
      header: 'Description',
      cell: ({ row }) => row?.original?.description ?? 'No description',
    },
    {
      accessorKey: 'stargazerCount',
      header: 'Stars',
      cell: ({ row }) => row?.original?.stargazerCount ?? 0,
    },
    {
      accessorKey: 'primaryLanguage.name',
      header: 'Language',
      cell: ({ row }) => row?.original?.primaryLanguage?.name ?? 'N/A',
    },
    {
      accessorKey: 'visibility',
      header: 'Visibility',
      cell: ({ row }) => row?.original?.visibility ?? 'N/A',
    },
  ];

  const { ref: animationRef } = useInView<HTMLDivElement>();

  return (
    <div className="h-screen" ref={animationRef}>
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
