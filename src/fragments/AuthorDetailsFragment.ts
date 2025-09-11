import { graphql } from 'react-relay';

export const AuthorDetailsFragment = graphql`
  fragment AuthorDetailsFragment on User {
    id
    login
    name
    avatarUrl
    bio
    company
    location
    email
    createdAt
    updatedAt
    isHireable
    isEmployee
    isGitHubStar
    twitterUsername
    websiteUrl
    pronouns
  }
`;