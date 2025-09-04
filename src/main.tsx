import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { QueryProvider } from './context/QueryContext';
import { environment } from './relay/environment';
import { RouterProvider } from './router/RouterProvider';
import './index.css';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <QueryProvider>
      <RelayEnvironmentProvider environment={environment}>
        <RouterProvider />
      </RelayEnvironmentProvider>
    </QueryProvider>
  </StrictMode>
);
