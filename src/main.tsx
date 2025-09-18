import '@/shared/styles/tailwind.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { RelayEnvironment } from './api/relay/RelayEnvironment';
import { routeTree } from './routes/routeTree.gen';
import { type Environment as RelayEnvironmentType } from 'relay-runtime';

document.documentElement.classList.add('dark');

// Define the custom context type
interface RouterContext {
  relayEnvironment: RelayEnvironmentType;
}

const router = createRouter({
  routeTree,
  context: {
    relayEnvironment: RelayEnvironment,
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
    routerContext: RouterContext;
  }
}

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  </StrictMode>
);
