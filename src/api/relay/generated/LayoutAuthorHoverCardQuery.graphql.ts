/**
 * @generated SignedSource<<968b8fdb5fc42174b52c25987e857aef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type LayoutAuthorHoverCardQuery$variables = {
  login: string;
};
export type LayoutAuthorHoverCardQuery$data = {
  readonly user:
    | {
        readonly ' $fragmentSpreads': FragmentRefs<'AuthorHoverCardContent_AuthorDetailsFragment'>;
      }
    | null
    | undefined;
};
export type LayoutAuthorHoverCardQuery = {
  response: LayoutAuthorHoverCardQuery$data;
  variables: LayoutAuthorHoverCardQuery$variables;
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
      name: 'LayoutAuthorHoverCardQuery',
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
      name: 'LayoutAuthorHoverCardQuery',
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
      cacheID: 'a709ecedd1abf3846f53dabc604a7ce3',
      id: null,
      metadata: {},
      name: 'LayoutAuthorHoverCardQuery',
      operationKind: 'query',
      text: 'query LayoutAuthorHoverCardQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...AuthorHoverCardContent_AuthorDetailsFragment\n    id\n  }\n}\n\nfragment AuthorHoverCardContent_AuthorDetailsFragment on User {\n  id\n  login\n  name\n  avatarUrl\n  bio\n  company\n  location\n  email\n  createdAt\n  updatedAt\n  isHireable\n  isEmployee\n  isGitHubStar\n  twitterUsername\n  websiteUrl\n  pronouns\n}\n',
    },
  };
})();

(node as any).hash = '0451df3eecc1537f408c29e99488c34b';

export default node;
