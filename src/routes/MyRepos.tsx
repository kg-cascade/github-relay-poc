import { createFileRoute } from '@tanstack/react-router';
import MyReposPage from '../pages/MyRepos';

export const Route = createFileRoute('/MyRepos')({
  component: MyRepos,
});

function MyRepos() {
  return <MyReposPage />;
}
