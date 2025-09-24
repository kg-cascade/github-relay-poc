/**
 * @generated SignedSource<<11ca82d72e55ffa351093b2eaf66914c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RepositoryVisibility =
  | 'INTERNAL'
  | 'PRIVATE'
  | 'PUBLIC'
  | '%future added value';
import { FragmentRefs } from 'relay-runtime';
export type Layout_search$data = {
  readonly search: {
    readonly edges:
      | ReadonlyArray<
          | {
              readonly node:
                | {
                    readonly description?: string | null | undefined;
                    readonly id?: string;
                    readonly name?: string;
                    readonly nameWithOwner?: string;
                    readonly owner?: {
                      readonly login: string;
                    };
                    readonly primaryLanguage?:
                      | {
                          readonly name: string;
                        }
                      | null
                      | undefined;
                    readonly stargazerCount?: number;
                    readonly visibility?: RepositoryVisibility;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
  readonly ' $fragmentType': 'Layout_search';
};
export type Layout_search$key = {
  readonly ' $data'?: Layout_search$data;
  readonly ' $fragmentSpreads': FragmentRefs<'Layout_search'>;
};

import LayoutPaginationQuery_graphql from './LayoutPaginationQuery.graphql';

const node: ReaderFragment = (function () {
  var v0 = ['search'],
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    };
  return {
    argumentDefinitions: [
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
    kind: 'Fragment',
    metadata: {
      connection: [
        {
          count: 'count',
          cursor: 'cursor',
          direction: 'forward',
          path: v0 /*: any*/,
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: 'count',
            cursor: 'cursor',
          },
          backward: null,
          path: v0 /*: any*/,
        },
        fragmentPathInResult: [],
        operation: LayoutPaginationQuery_graphql,
      },
    },
    name: 'Layout_search',
    selections: [
      {
        alias: 'search',
        args: [
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
        concreteType: 'SearchResultItemConnection',
        kind: 'LinkedField',
        name: '__Layout_search_connection',
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
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'id',
                        storageKey: null,
                      },
                      v1 /*: any*/,
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
                        selections: [v1 /*: any*/],
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
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'login',
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Repository',
                    abstractKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: '__typename',
                    storageKey: null,
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
        storageKey:
          '__Layout_search_connection(query:"stars:>1000",type:"REPOSITORY")',
      },
    ],
    type: 'Query',
    abstractKey: null,
  };
})();

(node as any).hash = 'a5e19bc5ac12775191fa53ba81ec77e9';

export default node;
