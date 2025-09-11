import '@/shared/styles/index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routes/routeTree.gen';

import { RelayEnviroment } from './api/relay/RelayEnvironment';

const router = createRouter({ routeTree });

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <RouterProvider router={router} />
    </RelayEnvironmentProvider>
  </StrictMode>
);
