import { NavLink } from '@/shared/components/ui/NavLink';
import { cn } from '@/shared/utils/cn';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import {
  BookLock,
  CalendarDays,
  Menu as MenuIcon,
  Star,
  type LucideIcon,
} from 'lucide-react';
// import { useState } from 'react';
import { type FileRouteTypes } from './routeTree.gen';
import { usePreloadedQuery, loadQuery } from 'react-relay';
import RootQuery from '../api/relay/generated/RootQuery.graphql';
import { LoggedUser } from './-components/LoggedUser';

import { RelayEnviroment } from '../api/relay/RelayEnvironment';
import { useLoaderData } from '@tanstack/react-router';

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
  {
    name: 'Calendar',
    href: '/',
    icon: CalendarDays,
    count: '12',
    current: false,
  },
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

export default function RootLayout() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const { preloadedQuery } = useLoaderData({ from: '__root__' }); // get preloaded query from loader
  const data = usePreloadedQuery(RootQuery, preloadedQuery); // use the preloaded query

  return (
    <>
      <div>
        {/* <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild> */}

        {/* Sidebar component, swap this element with another sidebar if you like */}
        {/* <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="relative flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-white/5 text-white'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="size-6 shrink-0"
                              />
                              {item.name}
                            </a>
                          </li>
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
                              className={classNames(
                                team.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                              )}
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:border-white/20 group-hover:text-white">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog> */}

        {/* Static sidebar for desktop */}
        <div className="hidden bg-gray-900 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
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
                  <LoggedUser user={data.viewer} />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-400 hover:text-white lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon aria-hidden="true" className="size-6" />
          </button>
          <div className="flex-1 text-sm/6 font-semibold text-white">
            Dashboard
          </div>
          <LoggedUser user={data.viewer} />
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
export const Route = createRootRoute({
  loader: () => {
    const preloadedQuery = loadQuery(RelayEnviroment, RootQuery, {}); //launch relay query before component is rendered
    return { preloadedQuery };
  },
  component: RootLayout,
});
