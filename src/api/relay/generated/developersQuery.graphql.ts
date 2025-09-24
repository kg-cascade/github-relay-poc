/**
 * @generated SignedSource<<61559cd1ce10f1d0cdba59eb2a1854f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type developersQuery$variables = {
  count?: number | null | undefined;
  cursor?: string | null | undefined;
};
export type developersQuery$data = {
  readonly ' $fragmentSpreads': FragmentRefs<'developers_search'>;
};
export type developersQuery = {
  response: developersQuery$data;
  variables: developersQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: 10,
      kind: 'LocalArgument',
      name: 'count',
    },
    v1 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'cursor',
    },
    v2 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'cursor',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'count',
      },
      {
        kind: 'Literal',
        name: 'query',
        value: 'followers:>1000',
      },
      {
        kind: 'Literal',
        name: 'type',
        value: 'USER',
      },
    ],
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
      kind: 'Fragment',
      metadata: null,
      name: 'developersQuery',
      selections: [
        {
          args: [
            {
              kind: 'Variable',
              name: 'count',
              variableName: 'count',
            },
            {
              kind: 'Variable',
              name: 'cursor',
              variableName: 'cursor',
            },
          ],
          kind: 'FragmentSpread',
          name: 'developers_search',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
      kind: 'Operation',
      name: 'developersQuery',
      selections: [
        {
          alias: null,
          args: v2 /*: any*/,
          concreteType: 'SearchResultItemConnection',
          kind: 'LinkedField',
          name: 'search',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'SearchResultItemEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        v3 /*: any*/,
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
                          name: 'bio',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'FollowerConnection',
                          kind: 'LinkedField',
                          name: 'followers',
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
                      ],
                      type: 'User',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [v3 /*: any*/],
                      type: 'Node',
                      abstractKey: '__isNode',
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'cursor',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'PageInfo',
              kind: 'LinkedField',
              name: 'pageInfo',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'endCursor',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'hasNextPage',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v2 /*: any*/,
          filters: ['query', 'type'],
          handle: 'connection',
          key: 'developers_search',
          kind: 'LinkedHandle',
          name: 'search',
        },
      ],
    },
    params: {
      cacheID: 'b51daad69f56cb3b4301e0e60fff38a2',
      id: null,
      metadata: {},
      name: 'developersQuery',
      operationKind: 'query',
      text: 'query developersQuery(\n  $cursor: String\n  $count: Int = 10\n) {\n  ...developers_search_1G22uz\n}\n\nfragment developers_search_1G22uz on Query {\n  search(query: "followers:>1000", type: USER, first: $count, after: $cursor) {\n    edges {\n      node {\n        __typename\n        ... on User {\n          id\n          login\n          name\n          bio\n          followers {\n            totalCount\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = '3284ea7173138d29c6525196bb72512c';

export default node;
