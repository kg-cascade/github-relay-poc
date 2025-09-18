import type { LoggedUser_user$key } from '@/api/relay/generated/LoggedUser_user.graphql';
import type {
  LoggedUserHoverQuery,
  LoggedUserHoverQuery$data,
} from '@/api/relay/generated/LoggedUserHoverQuery.graphql';

import HoverCard from '@/shared/components/ui/HoverCard';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import {
  fetchQuery,
  graphql,
  useFragment,
  useRelayEnvironment,
} from 'react-relay';
import LoggedUserHoverCard from './LoggedUserHoverCard';

const LoggedUserFragment = graphql`
  fragment LoggedUser_user on User {
    name
    login
    avatarUrl
  }
`;

const UserHoverQuery = graphql`
  query LoggedUserHoverQuery($login: String!) {
    user(login: $login) {
      ...LoggedUser_user
      repositories {
        totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      createdAt
    }
  }
`;

export function LoggedUser({ user }: { user: LoggedUser_user$key }) {
  const baseData = useFragment(LoggedUserFragment, user);
  const environment = useRelayEnvironment();

  const [hoverData, setHoverData] = useState<
    LoggedUserHoverQuery$data['user'] | null
  >(null);

  const handleMouseEnter = () => {
    if (!baseData.login) return;

    fetchQuery<LoggedUserHoverQuery>(environment, UserHoverQuery, {
      login: baseData.login,
    }).subscribe({
      next: (response: LoggedUserHoverQuery$data) => {
        setHoverData(response.user); // 👈 teraz TS zna typ
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  };

  return (
    <HoverCard content={<LoggedUserHoverCard data={hoverData} />}>
      <Link
        to="/$userName"
        params={{ userName: baseData.login }}
        className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-white/5"
        onMouseEnter={handleMouseEnter}
      >
        <img
          alt={baseData.name ?? ''}
          src={baseData.avatarUrl}
          className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
        />
        <span className="sr-only">Your profile</span>
        <span aria-hidden="true">{baseData.name ?? baseData.login}</span>
      </Link>
    </HoverCard>
  );
}
