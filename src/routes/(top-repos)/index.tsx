import type { TopReposAuthorHoverCardQuery } from '@/api/relay/generated/TopReposAuthorHoverCardQuery.graphql';
import type { TopReposQuery } from '@/api/relay/generated/TopReposQuery.graphql';
import type { TopRepos_search$key } from '@/api/relay/generated/TopRepos_search.graphql';
import AuthorHoverCardContent from '@/routes/(top-repos)/-components/AuthorHoverCardContent';
import Spinner from '@/shared/components/ui/Spinner';
import Table from '@/shared/components/Table';
import { Button } from '@/shared/components/ui/Button';
import HoverCard from '@/shared/components/ui/HoverCard';
import Input from '@/shared/components/ui/Input';
import { createFileRoute } from '@tanstack/react-router'; // Keep createFileRoute
import { type ColumnDef, type Row } from '@tanstack/react-table';
import { Suspense, useMemo, useState } from 'react';
import {
  graphql,
  useLazyLoadQuery,
  usePaginationFragment,
  useQueryLoader,
} from 'react-relay';
import { NavLink } from '@/shared/components/ui/NavLink';
import { useInView } from '@/shared/hooks/useInView';

// All content from TopRepos.tsx below this line

const AuthorHoverCardQuery = graphql`
  query TopReposAuthorHoverCardQuery($login: String!) {
    user(login: $login) {
      ...AuthorHoverCardContent_AuthorDetailsFragment
    }
  }
`;

type Repository = {
  id?: string;
  name?: string | null | undefined;
  nameWithOwner?: string | null | undefined;
  description?: string | null | undefined;
  stargazerCount?: number;
  visibility?: string;
  primaryLanguage?:
    | {
        name?: string | null;
      }
    | null
    | undefined;
  owner?: {
    login: string;
  };
};

const NameCell = ({ row }: { row: Row<Repository> }) => {
  const [queryRef, loadQuery] =
    useQueryLoader<TopReposAuthorHoverCardQuery>(AuthorHoverCardQuery);

  const handleMouseEnter = () => {
    if (!queryRef) {
      loadQuery({ login: row.original.owner?.login || '' });
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <HoverCard
        content={
          <Suspense fallback={<Spinner />}>
            {queryRef && <AuthorHoverCardContent queryRef={queryRef} />}
          </Suspense>
        }
      >
        <NavLink
          to={`/repo/${row.original.id}`}
          className="text-gray-300 hover:text-gray-500 underline"
        >
          {row.original.nameWithOwner}
        </NavLink>
      </HoverCard>
    </div>
  );
};

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
                owner {
                  login
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

  const tableData: Repository[] =
    (data.search.edges
      ?.map(
        (edge: { node: Repository | null | undefined } | null | undefined) =>
          edge?.node
      )
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
      cell: ({ row }) => <NameCell row={row} />,
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
    <div className="p-2" ref={ref}>
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
        <div className="mb-4 flex items-center gap-2">
          <Input
            placeholder="Search by name, description, or language..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
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
  // Renamed from TopReposPage to avoid conflict and better reflect its new home
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

export const Route = createFileRoute('/(top-repos)/')({
  component: IndexComponent, // Use the new component name
});
