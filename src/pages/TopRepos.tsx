import Button from '@/components/Button';
import Input from '@/components/Input';
import Spinner from '@/components/Spinner';
import Table from '@/components/Table';
import { Link } from '@tanstack/react-router';
import { type ColumnDef } from '@tanstack/react-table';
import { Suspense, useMemo, useState } from 'react';
import { graphql, useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import type { TopReposQuery } from './__generated__/TopReposQuery.graphql';
import type { TopRepos_search$key } from './__generated__/TopRepos_search.graphql';

function TopRepositories(props: { query: TopRepos_search$key }) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    graphql`
      fragment TopRepos_search on Query
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 10 }
      )
      @refetchable(queryName: "TopReposPaginationQuery") {
        search(
          query: "stars:>1000"
          type: REPOSITORY
          first: $count
          after: $cursor
        ) @connection(key: "TopRepos_search") {
          edges {
            node {
              ... on Repository {
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
            }
          }
        }
      }
    `,
    props.query
  );

  const [searchQuery, setSearchQuery] = useState('');

  type Repository = {
    id: string;
    name: string;
    nameWithOwner: string | null | undefined;
    description: string | null | undefined;
    stargazerCount: number;
    visibility: string;
    primaryLanguage:
      | {
          name: string;
        }
      | null
      | undefined;
  };

  const tableData: Repository[] =
    (data.search.edges
      ?.map((edge) => edge?.node)
      .filter(Boolean) as Repository[]) || [];

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return tableData;
    }
    return tableData.filter((repo: Repository) => {
      const query = searchQuery.toLowerCase();
      return (
        repo.nameWithOwner?.toLowerCase().includes(query) ||
        repo.description?.toLowerCase().includes(query) ||
        repo.primaryLanguage?.name?.toLowerCase().includes(query)
      );
    });
  }, [tableData, searchQuery]);

  const columns: ColumnDef<Repository>[] = [
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
      {' '}
      <h1 className="text-xl font-semibold mb-2">
        Top Repositories (by stars)
      </h1>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-96">
            <Spinner size="large" />
          </div>
        }
      >
        <div className="mb-4 flex gap-2">
          <Input
            placeholder="Search by name, description, or language..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button onClick={() => setSearchQuery('')}>Clear</Button>
        </div>
        {filteredData.length > 0 ? (
          <Table columns={columns} data={filteredData} />
        ) : (
          <p>No repositories found.</p>
        )}
        {hasNext && (
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => loadNext(10)}
              disabled={isLoadingNext}
              colorScheme="primary"
            >
              {isLoadingNext ? <Spinner /> : 'Load More'}
            </Button>
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default function TopReposPage() {
  const data = useLazyLoadQuery<TopReposQuery>(
    graphql`
      query TopReposQuery($cursor: String, $count: Int = 10) {
        ...TopRepos_search @arguments(cursor: $cursor, count: $count)
      }
    `,
    {}
  );

  return <TopRepositories query={data} />;
}
