import { createFileRoute } from '@tanstack/react-router';
import RepoPage from '@/pages/repo/Repo';

export const Route = createFileRoute('/Repo/$repoId')({
  component: RepoComponent,
});

function RepoComponent() {
  const { repoId } = Route.useParams();
  return <RepoPage repoId={repoId} />;
}