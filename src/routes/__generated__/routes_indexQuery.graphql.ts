/**
 * @generated SignedSource<<9b02cbc3bf371359fa5798c7d4983087>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type routes_indexQuery$variables = Record<PropertyKey, never>;
export type routes_indexQuery$data = {
  readonly viewer: {
    readonly login: string;
    readonly name: string | null | undefined;
  };
};
export type routes_indexQuery = {
  response: routes_indexQuery$data;
  variables: routes_indexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routes_indexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "routes_indexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4868793feae10341fcf0ff61f1999a37",
    "id": null,
    "metadata": {},
    "name": "routes_indexQuery",
    "operationKind": "query",
    "text": "query routes_indexQuery {\n  viewer {\n    login\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "240e85666484bd7539dcba2d2182c13e";

export default node;
