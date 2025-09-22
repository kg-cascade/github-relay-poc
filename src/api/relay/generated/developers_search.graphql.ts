/**
 * @generated SignedSource<<bf4426b8627b7bd302bdf8e83193086b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type developers_search$data = {
  readonly search: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly bio?: string | null | undefined;
        readonly followers?: {
          readonly totalCount: number;
        };
        readonly id?: string;
        readonly login?: string;
        readonly name?: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "developers_search";
};
export type developers_search$key = {
  readonly " $data"?: developers_search$data;
  readonly " $fragmentSpreads": FragmentRefs<"developers_search">;
};

import developersPaginationQuery_graphql from './developersPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "search"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": developersPaginationQuery_graphql
    }
  },
  "name": "developers_search",
  "selections": [
    {
      "alias": "search",
      "args": [
        {
          "kind": "Literal",
          "name": "query",
          "value": "followers:>1000"
        },
        {
          "kind": "Literal",
          "name": "type",
          "value": "USER"
        }
      ],
      "concreteType": "SearchResultItemConnection",
      "kind": "LinkedField",
      "name": "__developers_search_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SearchResultItemEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "login",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "bio",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "FollowerConnection",
                      "kind": "LinkedField",
                      "name": "followers",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "totalCount",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "type": "User",
                  "abstractKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__developers_search_connection(query:\"followers:>1000\",type:\"USER\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "7fad65127e6df6bd5f12bce2b6be9182";

export default node;
