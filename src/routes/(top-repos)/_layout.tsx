import { GenericTabs } from '@/shared/components/ui/Tabs';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(top-repos)/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <GenericTabs
        tabs={[
          { label: 'Repositories', href: '/' },
          { label: 'Developers', href: '/developers' },
        ]}
        defaultIndex={location.pathname.startsWith('/developers') ? 1 : 0}
      />
      <Outlet />
    </div>
  );
}
