/**
 * @generated SignedSource<<199c70ff837b0c79b51731667b18fde6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type LoggedUserHoverQuery$variables = {
  login: string;
};
export type LoggedUserHoverQuery$data = {
  readonly user:
    | {
        readonly contributionsCollection: {
          readonly contributionCalendar: {
            readonly totalContributions: number;
          };
        };
        readonly createdAt: any;
        readonly repositories: {
          readonly totalCount: number;
        };
        readonly ' $fragmentSpreads': FragmentRefs<'LoggedUser_user'>;
      }
    | null
    | undefined;
};
export type LoggedUserHoverQuery = {
  response: LoggedUserHoverQuery$data;
  variables: LoggedUserHoverQuery$variables;
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
    ],
    v2 = {
      alias: null,
      args: null,
      concreteType: 'RepositoryConnection',
      kind: 'LinkedField',
      name: 'repositories',
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'totalCount',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      concreteType: 'ContributionsCollection',
      kind: 'LinkedField',
      name: 'contributionsCollection',
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'ContributionCalendar',
          kind: 'LinkedField',
          name: 'contributionCalendar',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'totalContributions',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'createdAt',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'LoggedUserHoverQuery',
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
              name: 'LoggedUser_user',
            },
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
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
      name: 'LoggedUserHoverQuery',
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
              name: 'name',
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
              name: 'avatarUrl',
              storageKey: null,
            },
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'id',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: 'fea5e17fe6937f77fde9cf1b0bf4a14c',
      id: null,
      metadata: {},
      name: 'LoggedUserHoverQuery',
      operationKind: 'query',
      text: 'query LoggedUserHoverQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...LoggedUser_user\n    repositories {\n      totalCount\n    }\n    contributionsCollection {\n      contributionCalendar {\n        totalContributions\n      }\n    }\n    createdAt\n    id\n  }\n}\n\nfragment LoggedUser_user on User {\n  name\n  login\n  avatarUrl\n}\n',
    },
  };
})();

(node as any).hash = 'e3165e9351223ee9f18bdec875cb0247';

export default node;
