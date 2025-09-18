import type { LoggedUserHoverQuery$data } from '@/api/relay/generated/LoggedUserHoverQuery.graphql';

type HoverCardProps = {
  data: LoggedUserHoverQuery$data['user'] | null;
};

export default function LoggedUserHoverCard({ data }: HoverCardProps) {
  if (!data) return <div>Loading...</div>;

  const ownsRepo = data.repositories.totalCount;
  const contributions =
    data.contributionsCollection.contributionCalendar.totalContributions;
  const joinedDate = new Date(data.createdAt).toLocaleDateString();

  return (
    <div className="p-2 text-sm text-gray-200">
      <ul className="space-y-1">
        <li>Owns this repository: {ownsRepo}</li>
        <li>Committed in the past month: {contributions}</li>
        <li>Joined GitHub: {joinedDate}</li>
      </ul>
    </div>
  );
}
