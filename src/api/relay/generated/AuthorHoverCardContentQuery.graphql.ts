/**
 * @generated SignedSource<<5525104ccbde20199d17339dc927374f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type AuthorHoverCardContentQuery$variables = {
  login: string;
};
export type AuthorHoverCardContentQuery$data = {
  readonly user:
    | {
        readonly ' $fragmentSpreads': FragmentRefs<'AuthorHoverCardContent_AuthorDetailsFragment'>;
      }
    | null
    | undefined;
};
export type AuthorHoverCardContentQuery = {
  response: AuthorHoverCardContentQuery$data;
  variables: AuthorHoverCardContentQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'login',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'login',
        variableName: 'login',
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'AuthorHoverCardContentQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'user',
          plural: false,
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'AuthorHoverCardContent_AuthorDetailsFragment',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'AuthorHoverCardContentQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'user',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'id',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'login',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'name',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'avatarUrl',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'bio',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'company',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'location',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'email',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'createdAt',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'updatedAt',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'isHireable',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'isEmployee',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'isGitHubStar',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'twitterUsername',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'websiteUrl',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'pronouns',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '921ae487e05723c6aafc4b1a4d129e55',
      id: null,
      metadata: {},
      name: 'AuthorHoverCardContentQuery',
      operationKind: 'query',
      text: 'query AuthorHoverCardContentQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...AuthorHoverCardContent_AuthorDetailsFragment\n    id\n  }\n}\n\nfragment AuthorHoverCardContent_AuthorDetailsFragment on User {\n  id\n  login\n  name\n  avatarUrl\n  bio\n  company\n  location\n  email\n  createdAt\n  updatedAt\n  isHireable\n  isEmployee\n  isGitHubStar\n  twitterUsername\n  websiteUrl\n  pronouns\n}\n',
    },
  };
})();

(node as any).hash = '3a170756a72902679da7f61e9198095e';

export default node;
