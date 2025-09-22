import HoverCard from '@/shared/components/ui/HoverCard';
import { graphql, useFragment } from 'react-relay';
import { type ContributionHeatmap_user$key } from '@/api/relay/generated/ContributionHeatmap_user.graphql';

const contributionHeatmapFragment = graphql`
  fragment ContributionHeatmap_user on User {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            weekday
            color
          }
        }
      }
    }
  }
`;

const ContributionHeatmap = ({
  user,
}: {
  user: ContributionHeatmap_user$key;
}) => {
  const data = useFragment(contributionHeatmapFragment, user);

  if (!data) {
    return <div>Contribution data not available.</div>;
  }

  const { contributionCalendar } = data.contributionsCollection;
  const displayDayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">
        {contributionCalendar.totalContributions} contributions in the last year
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-1 text-xs text-gray-500">
            {displayDayLabels.map((label, i) => (
              <div key={i} className="w-4 h-4 flex items-center">
                {label}
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-1">
            {contributionCalendar.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.contributionDays.map((day, dayIndex) =>
                  day ? (
                    <HoverCard
                      key={day.date}
                      content={
                        <div>
                          {day.contributionCount} contributions on {day.date}
                        </div>
                      }
                    >
                      <div
                        className="w-4 h-4 rounded-sm"
                        style={{ backgroundColor: day.color }}
                      />
                    </HoverCard>
                  ) : (
                    <div
                      key={`${weekIndex}_empty_${dayIndex}`}
                      className="w-4 h-4 rounded-sm bg-transparent"
                    />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionHeatmap;
