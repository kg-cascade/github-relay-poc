import type { RootQuery } from '@/api/relay/generated/RootQuery.graphql';
import PageSuspense from '@/shared/components/PageSuspense';
import { NavLink } from '@/shared/components/ui/NavLink';
import { cn } from '@/shared/utils/cn';
import { createRootRoute, Outlet, useLoaderData } from '@tanstack/react-router';
import {
  BookLock,
  // CalendarDays,
  Menu as MenuIcon,
  Star,
  type LucideIcon,
} from 'lucide-react';
import { Suspense } from 'react';
import {
  graphql,
  loadQuery,
  usePreloadedQuery,
  type PreloadedQuery,
} from 'react-relay';
import { type Environment as RelayEnvironmentType } from 'relay-runtime';
import Settings from './(settings)/Settings';
import { LoggedUser } from './-components/LoggedUser/LoggedUser';
import LoggedUserSkeleton from './-components/LoggedUser/LoggedUserSkeleton';
import { type FileRouteTypes } from './routeTree.gen';

// Typ kontekstu routera
interface RouterContext {
  relayEnvironment: RelayEnvironmentType;
}

type NavigationItem = {
  name: string;
  href: FileRouteTypes['to'];
  icon: LucideIcon;
  count?: string;
  current?: boolean;
};

const navigation: NavigationItem[] = [
  { name: 'Top Repos', href: '/', icon: Star, count: '5', current: true },
  { name: 'My Repos', href: '/my-repos', icon: BookLock, current: false },
  // {
  //   name: 'Calendar',
  //   href: '/',
  //   icon: CalendarDays,
  //   count: '12',
  //   current: false,
  // },
];

const teams = [
  { id: 1, name: 'Heroicons', href: '/', initial: 'H', current: false },
  {
    id: 2,
    name: 'Tailwind Labs',
    href: '/my-repos',
    initial: 'T',
    current: false,
  },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];

const RootQuery = graphql`
  query RootQuery {
    viewer {
      ...LoggedUser_user
      id
    }
  }
`;

// --- Komponent RootLayout ---
export default function RootLayout() {
  const { preloadedQuery } = useLoaderData({
    from: '__root__',
  }) as { preloadedQuery: PreloadedQuery<RootQuery> };

  const data = usePreloadedQuery<RootQuery>(RootQuery, preloadedQuery);
  return (
    <div>
      {/* Static sidebar for desktop */}
      <div className="hidden bg-gray-900 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1 flex flex-col">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      icon={item.icon}
                      spanClassName="w-full"
                      preload="intent"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs/6 font-semibold text-gray-400">
                  Your teams
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={cn(
                          team.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                        )}
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <Suspense fallback={<LoggedUserSkeleton />}>
                  <LoggedUser user={data.viewer} />
                </Suspense>
              </li>
              <li>
                <Settings />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-white lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon aria-hidden="true" className="size-6" />
        </button>
        <div className="flex-1 text-sm/6 font-semibold text-white">
          Dashboard
        </div>
        <Settings />
        <Suspense fallback={<LoggedUserSkeleton />}>
          <LoggedUser user={data.viewer} />
        </Suspense>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export const Route = createRootRoute({
  component: () => (
    <Suspense fallback={<PageSuspense />}>
      <RootLayout />
    </Suspense>
  ),
  loader: ({ context }) => {
    const relayEnvironment = (context as RouterContext).relayEnvironment;

    const preloadedQuery: PreloadedQuery<RootQuery> = loadQuery(
      relayEnvironment,
      RootQuery,
      {}
    );
    return { preloadedQuery };
  },
});
