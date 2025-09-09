import { graphql } from 'react-relay';

export const RepositoryFragment = graphql`
  fragment RepositoryFragment on Repository {
    id
    name
    nameWithOwner
    description
    stargazerCount
    visibility
    primaryLanguage {
      name
    }
  }
`;
