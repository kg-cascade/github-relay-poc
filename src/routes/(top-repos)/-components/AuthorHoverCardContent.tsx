import React from 'react';
import {
  graphql,
  useFragment,
  usePreloadedQuery,
  type PreloadedQuery,
} from 'react-relay';
import type { AuthorHoverCardContentQuery } from '@/api/relay/generated/AuthorHoverCardContentQuery.graphql';
import type { AuthorHoverCardContent_AuthorDetailsFragment$key } from '@/api/relay/generated/AuthorHoverCardContent_AuthorDetailsFragment.graphql';

const AuthorHoverCardContent_AuthorDetailsFragment = graphql`
  fragment AuthorHoverCardContent_AuthorDetailsFragment on User {
    id
    login
    name
    avatarUrl
    bio
    company
    location
    email
    # createdAt
    # updatedAt
    # isHireable
    # isEmployee
    # isGitHubStar
    twitterUsername
    websiteUrl
    # pronouns
  }
`;

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
          ...AuthorHoverCardContent_AuthorDetailsFragment
        }
      }
    `,
    queryRef
  );

  const user = useFragment<AuthorHoverCardContent_AuthorDetailsFragment$key>(
    AuthorHoverCardContent_AuthorDetailsFragment,
    data.user
  );

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="bg-background text-text flex w-64 flex-col gap-2 rounded-lg border p-3">
      <div className="flex items-center gap-3">
        <img
          src={user.avatarUrl || ''}
          alt={user.login}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <p className="font-bold">{user.name || user.login}</p>
          <p className="text-sm text-gray-500">@{user.login}</p>
        </div>
      </div>

      {user.bio && <p className="text-sm">{user.bio}</p>}

      <div className="space-y-1 text-xs text-gray-400">
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
