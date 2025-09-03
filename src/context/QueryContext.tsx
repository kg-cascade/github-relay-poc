import React, { createContext, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ReactQueryContextValue {
  queryClient: QueryClient;
}

export const ReactQueryContext = createContext<
  ReactQueryContextValue | undefined
>(undefined);

// Provider that stores the QueryClient in context, plus the QueryClientProvider
export const QueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Memoize the queryClient to keep stable ref
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60, // 1 minute
          },
        },
      }),
    []
  );

  return (
    <ReactQueryContext.Provider value={{ queryClient }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReactQueryContext.Provider>
  );
};
