/**
 * @generated SignedSource<<b4e07831cf06f28311d6396a5b5c307a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TopReposTestAuthorQuery$variables = {
  login: string;
};
export type TopReposTestAuthorQuery$data = {
  readonly user: {
    readonly avatarUrl: any;
    readonly bio: string | null | undefined;
    readonly login: string;
    readonly name: string | null | undefined;
  } | null | undefined;
};
export type TopReposTestAuthorQuery = {
  response: TopReposTestAuthorQuery$data;
  variables: TopReposTestAuthorQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TopReposTestAuthorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TopReposTestAuthorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
    "cacheID": "96fbcc900fcdd706750a6a0c11fcd6a1",
    "id": null,
    "metadata": {},
    "name": "TopReposTestAuthorQuery",
    "operationKind": "query",
    "text": "query TopReposTestAuthorQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    login\n    name\n    avatarUrl\n    bio\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "814dca31ea65511b53ec53ad20334993";

export default node;
