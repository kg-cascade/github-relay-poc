import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query';

interface ApiEntry {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

interface ApiResponse {
  count: number;
  entries: ApiEntry[];
}

// Define the fetcher function
const fetchPublicApis = async (): Promise<ApiResponse> => {
  const res = await fetch('https://api.publicapis.org/entries');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const Route = createFileRoute('/PublicApis')({
  component: PublicApisComponent,
})

function PublicApisComponent() {
  const { data, error, isLoading } = useQuery({ queryKey: ['publicApis'], queryFn: fetchPublicApis });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Public APIs</h1>
      <ul>
        {data?.entries.slice(0, 10).map((api: ApiEntry) => (
          <li key={api.Link}>{api.API} - {api.Description}</li>
        ))}
      </ul>
    </div>
  );
}
