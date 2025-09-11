import type { AuthorDetailsFragment$key } from '@/fragments/__generated__/AuthorDetailsFragment.graphql';
import { AuthorDetailsFragment } from '@/fragments/AuthorDetailsFragment';
import React from 'react';
import {
  graphql,
  useFragment,
  usePreloadedQuery,
  type PreloadedQuery,
} from 'react-relay';
import type { AuthorHoverCardContentQuery } from './__generated__/AuthorHoverCardContentQuery.graphql';

interface AuthorHoverCardContentProps {
  queryRef: PreloadedQuery<AuthorHoverCardContentQuery>;
}

const AuthorHoverCardContent: React.FC<AuthorHoverCardContentProps> = ({
  queryRef,
}) => {
  const data = usePreloadedQuery<AuthorHoverCardContentQuery>(
    graphql`
      query AuthorHoverCardContentQuery($login: String!) {
        user(login: $login) {
          ...AuthorDetailsFragment
        }
      }
    `,
    queryRef
  );

  const user = useFragment<AuthorDetailsFragment$key>(
    AuthorDetailsFragment,
    data.user
  );

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="flex flex-col p-3 gap-2 border rounded-lg bg-background text-text w-64">
      <div className="flex items-center gap-3">
        <img
          src={user.avatarUrl || ''}
          alt={user.login}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold">{user.name || user.login}</p>
          <p className="text-sm text-gray-500">@{user.login}</p>
        </div>
      </div>

      {user.bio && <p className="text-sm">{user.bio}</p>}

      <div className="text-xs text-gray-400 space-y-1">
        {user.company && <p>🏢 {user.company}</p>}
        {user.location && <p>📍 {user.location}</p>}
        {user.email && <p>✉️ {user.email}</p>}
        {user.websiteUrl && (
          <p>
            🔗{' '}
            <a
              href={user.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:underline"
            >
              {user.websiteUrl}
            </a>
          </p>
        )}
        {user.twitterUsername && (
          <p>
            🐦{' '}
            <a
              href={`https://twitter.com/${user.twitterUsername}`}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:underline"
            >
              @{user.twitterUsername}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthorHoverCardContent;
