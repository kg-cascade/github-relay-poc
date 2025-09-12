import Footer from '@/shared/components/Footer';
import MainMenu from '@/shared/components/MainMenu';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <div className="min-h-svh bg-white dark:bg-slate-900">
    <MainMenu />
    <Outlet />
    <Footer />
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
