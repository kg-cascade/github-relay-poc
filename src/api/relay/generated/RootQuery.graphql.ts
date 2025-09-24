/**
 * @generated SignedSource<<37aaebec3a4be914f971cfb419aeb36f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RootQuery$variables = Record<PropertyKey, never>;
export type RootQuery$data = {
  readonly viewer: {
    readonly id: string;
    readonly ' $fragmentSpreads': FragmentRefs<'LoggedUser_user'>;
  };
};
export type RootQuery = {
  response: RootQuery$data;
  variables: RootQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = {
    alias: null,
    args: null,
    kind: 'ScalarField',
    name: 'id',
    storageKey: null,
  };
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'RootQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'viewer',
          plural: false,
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'LoggedUser_user',
            },
            v0 /*: any*/,
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'RootQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'viewer',
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
            v0 /*: any*/,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '6e73316302a6ded98795677ae503a99e',
      id: null,
      metadata: {},
      name: 'RootQuery',
      operationKind: 'query',
      text: 'query RootQuery {\n  viewer {\n    ...LoggedUser_user\n    id\n  }\n}\n\nfragment LoggedUser_user on User {\n  name\n  login\n  avatarUrl\n}\n',
    },
  };
})();

(node as any).hash = '7a9a178916a92a04e9e3ca31ab1c4d5a';

export default node;
