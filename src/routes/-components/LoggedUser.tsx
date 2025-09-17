import { graphql, useFragment } from 'react-relay';

import type { LoggedUser_user$key } from '@/api/relay/generated/LoggedUser_user.graphql';

const LoggedUserFragment = graphql`
  fragment LoggedUser_user on User {
    name
    avatarUrl
  }
`;

export function LoggedUser({ user }: { user: LoggedUser_user$key }) {
  const data = useFragment(LoggedUserFragment, user);

  return (
    <a
      href="#"
      className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-white/5"
    >
      <img
        alt={data.name ?? ''}
        src={data.avatarUrl}
        className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
      />
      <span className="sr-only">Your profile</span>
      <span aria-hidden="true">{data.name}</span>
    </a>
  );
}
