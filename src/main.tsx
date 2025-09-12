import '@/shared/styles/tailwind.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
document.documentElement.classList.add('dark');

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routes/routeTree.gen';

import { RelayEnviroment } from './api/relay/RelayEnvironment';

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  </StrictMode>
);
