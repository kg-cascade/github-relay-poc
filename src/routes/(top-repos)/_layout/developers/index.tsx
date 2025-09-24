import type { developersQuery } from '@/api/relay/generated/developersQuery.graphql';
import type { developers_search$key } from '@/api/relay/generated/developers_search.graphql';
import PageSuspense from '@/shared/components/PageSuspense';
import Table from '@/shared/components/Table';
import { Button } from '@/shared/components/ui/Button';
import Input from '@/shared/components/ui/Input';
import { NavLink } from '@/shared/components/ui/NavLink';
import Spinner from '@/shared/components/ui/Spinner';
import { useInView } from '@/shared/hooks/useInView';
import { createFileRoute } from '@tanstack/react-router';
import { type ColumnDef, type Row } from '@tanstack/react-table';
import { Suspense, useMemo, useState } from 'react';
import { graphql, useLazyLoadQuery, usePaginationFragment } from 'react-relay';

type Developer = {
  id?: string;
  login?: string;
  name?: string | null | undefined;
  bio?: string | null | undefined;
  followers?: {
    totalCount: number;
  };
};

const NameCell = ({ row }: { row: Row<Developer> }) => {
  return (
    <NavLink
      to="/$userName"
      params={{ userName: row.original.login }}
      linkClassName="text-gray-300 hover:text-gray-500 underline"
    >
      {row.original.name || row.original.login}
    </NavLink>
  );
};

function TopDevelopers(props: { query: developers_search$key }) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    graphql`
      fragment developers_search on Query
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 10 }
      )
      @refetchable(queryName: "developersPaginationQuery") {
        search(
          query: "followers:>1000"
          type: USER
          first: $count
          after: $cursor
        ) @connection(key: "developers_search") {
          edges {
            node {
              ... on User {
                id
                login
                name
                bio
                followers {
                  totalCount
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

  const tableData: Developer[] =
    (data.search.edges
      ?.map(
        (edge: { node: Developer | null | undefined } | null | undefined) =>
          edge?.node
      )
      .filter(Boolean) as Developer[]) || [];

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return tableData;
    }
    return tableData.filter((dev: Developer) => {
      const query = searchQuery.toLowerCase();
      return (
        dev.login?.toLowerCase().includes(query) ||
        dev.name?.toLowerCase().includes(query) ||
        dev.bio?.toLowerCase().includes(query)
      );
    });
  }, [tableData, searchQuery]);

  const columns: ColumnDef<Developer>[] = [
    {
      id: '#',
      header: '#',
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => <NameCell row={row} />,
    },
    {
      accessorKey: 'bio',
      header: 'Popular Info',
      cell: ({ row }) => row.original?.bio || 'No bio',
    },
    {
      id: 'follow',
      header: 'Follow',
      cell: () => <Button size={'small'}>Follow</Button>,
    },
  ];

  const { ref } = useInView<HTMLDivElement>();

  return (
    <div className="p-2" ref={ref}>
      <h1 className="mb-2 text-xl font-semibold">
        Top Developers (by followers)
      </h1>
      <Suspense
        fallback={
          <div className="flex h-96 items-center justify-center">
            <Spinner size="large" />
          </div>
        }
      >
        <div className="mb-4 flex items-center gap-2">
          <Input
            placeholder="Search by name, login, or bio..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
          <Button onClick={() => setSearchQuery('')}>Clear</Button>
        </div>

        {filteredData.length > 0 ? (
          <Table columns={columns} data={filteredData} />
        ) : (
          <p>No developers found.</p>
        )}
        {hasNext && (
          <div className="mt-4 flex justify-center">
            <Button
              size={'small'}
              onClick={() => loadNext(10)}
              disabled={isLoadingNext}
            >
              {isLoadingNext ? <Spinner /> : 'Load More'}
            </Button>
          </div>
        )}
      </Suspense>
    </div>
  );
}

function IndexComponent() {
  const data = useLazyLoadQuery<developersQuery>(
    graphql`
      query developersQuery($cursor: String, $count: Int = 10) {
        ...developers_search @arguments(cursor: $cursor, count: $count)
      }
    `,
    {}
  );

  return <TopDevelopers query={data} />;
}

export const Route = createFileRoute('/(top-repos)/_layout/developers/')({
  component: () => (
    <Suspense fallback={<PageSuspense />}>
      <IndexComponent />
    </Suspense>
  ),
});
