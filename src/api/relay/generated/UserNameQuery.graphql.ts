/**
 * @generated SignedSource<<0dc0991d91a719a29ead697da8f94ee8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UserNameQuery$variables = {
  userName: string;
};
export type UserNameQuery$data = {
  readonly user: {
    readonly avatarUrl: any;
    readonly bio: string | null | undefined;
    readonly company: string | null | undefined;
    readonly email: string;
    readonly id: string;
    readonly location: string | null | undefined;
    readonly login: string;
    readonly name: string | null | undefined;
    readonly url: any;
    readonly websiteUrl: any | null | undefined;
  } | null | undefined;
};
export type UserNameQuery = {
  response: UserNameQuery$data;
  variables: UserNameQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userName"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "login",
        "variableName": "userName"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
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
        "name": "avatarUrl",
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
        "kind": "ScalarField",
        "name": "company",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "location",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "websiteUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserNameQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserNameQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "16e045fa707199da040bbd245e22776f",
    "id": null,
    "metadata": {},
    "name": "UserNameQuery",
    "operationKind": "query",
    "text": "query UserNameQuery(\n  $userName: String!\n) {\n  user(login: $userName) {\n    id\n    login\n    name\n    avatarUrl\n    bio\n    company\n    location\n    url\n    websiteUrl\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "e6d32783fd70a9e47ad11a7565279f24";

export default node;
