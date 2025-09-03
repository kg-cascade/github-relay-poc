import { useQueryContext } from '@/hooks/useQueryClient';
import { routeTree } from '@/router/routeTree.gen';
import type { QueryClient } from '@tanstack/react-query';
import {
  createRouter,
  RouterProvider as Provider,
} from '@tanstack/react-router';
import { useMemo } from 'react';

export interface RootContext {
  queryClient: QueryClient;
}

export function RouterProvider() {
  const { queryClient } = useQueryContext();

  // Memoize the router so it doesn't recreate on every render
  const router = useMemo(() => {
    return createRouter({
      routeTree,
      context: {
        queryClient,
      } as RootContext,
      defaultPreload: 'intent',
      defaultPreloadStaleTime: 0,
      scrollRestoration: true,
      scrollRestorationBehavior: 'smooth',
      //Restore to last scroll position on page change
      getScrollRestorationKey: (location) => location.pathname,
    });
  }, [queryClient]);

  return <Provider router={router} />;
}
