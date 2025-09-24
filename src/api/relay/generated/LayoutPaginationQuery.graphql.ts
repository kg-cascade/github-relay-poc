/**
 * @generated SignedSource<<a0b5b5d19ea85581239b069208129480>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type LayoutPaginationQuery$variables = {
  count?: number | null | undefined;
  cursor?: string | null | undefined;
};
export type LayoutPaginationQuery$data = {
  readonly ' $fragmentSpreads': FragmentRefs<'Layout_search'>;
};
export type LayoutPaginationQuery = {
  response: LayoutPaginationQuery$data;
  variables: LayoutPaginationQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: 10,
        kind: 'LocalArgument',
        name: 'count',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'cursor',
      },
    ],
    v1 = [
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
        value: 'stars:>1000',
      },
      {
        kind: 'Literal',
        name: 'type',
        value: 'REPOSITORY',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'LayoutPaginationQuery',
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
          name: 'Layout_search',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'LayoutPaginationQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
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
                    v2 /*: any*/,
                    {
                      kind: 'InlineFragment',
                      selections: [
                        v3 /*: any*/,
                        v4 /*: any*/,
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'nameWithOwner',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'description',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'stargazerCount',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'visibility',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Language',
                          kind: 'LinkedField',
                          name: 'primaryLanguage',
                          plural: false,
                          selections: [v4 /*: any*/, v3 /*: any*/],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: 'LinkedField',
                          name: 'owner',
                          plural: false,
                          selections: [
                            v2 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'login',
                              storageKey: null,
                            },
                            v3 /*: any*/,
                          ],
                          storageKey: null,
                        },
                      ],
                      type: 'Repository',
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
          args: v1 /*: any*/,
          filters: ['query', 'type'],
          handle: 'connection',
          key: 'Layout_search',
          kind: 'LinkedHandle',
          name: 'search',
        },
      ],
    },
    params: {
      cacheID: '69b502a1919d5882eff6e94ad8376937',
      id: null,
      metadata: {},
      name: 'LayoutPaginationQuery',
      operationKind: 'query',
      text: 'query LayoutPaginationQuery(\n  $count: Int = 10\n  $cursor: String\n) {\n  ...Layout_search_1G22uz\n}\n\nfragment Layout_search_1G22uz on Query {\n  search(query: "stars:>1000", type: REPOSITORY, first: $count, after: $cursor) {\n    edges {\n      node {\n        __typename\n        ... on Repository {\n          id\n          name\n          nameWithOwner\n          description\n          stargazerCount\n          visibility\n          primaryLanguage {\n            name\n            id\n          }\n          owner {\n            __typename\n            login\n            id\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'a5e19bc5ac12775191fa53ba81ec77e9';

export default node;
