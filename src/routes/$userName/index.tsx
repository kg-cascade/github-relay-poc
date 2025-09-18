import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$userName/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { userName } = Route.useParams();

  return <div>Hello /{userName}/!</div>;
}
