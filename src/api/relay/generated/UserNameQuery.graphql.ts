/**
 * @generated SignedSource<<ca294a7c7b04c4d1791de28ced6f01a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserNameQuery$variables = {
  userName: string;
};
export type UserNameQuery$data = {
  readonly user: {
    readonly avatarUrl: any;
    readonly bio: string | null | undefined;
    readonly company: string | null | undefined;
    readonly createdAt: any;
    readonly email: string;
    readonly id: string;
    readonly location: string | null | undefined;
    readonly login: string;
    readonly name: string | null | undefined;
    readonly url: any;
    readonly websiteUrl: any | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"OrganizationsList_user" | "TopUserRepo_user">;
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
    "kind": "Variable",
    "name": "login",
    "variableName": "userName"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "company",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "websiteUrl",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserNameQuery",
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
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrganizationsList_user"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TopUserRepo_user"
          }
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
    "name": "UserNameQuery",
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
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              }
            ],
            "concreteType": "OrganizationConnection",
            "kind": "LinkedField",
            "name": "organizations",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v10/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "organizations(first:10)"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 5
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": {
                  "direction": "DESC",
                  "field": "STARGAZERS"
                }
              }
            ],
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "topRepositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "visibility",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "stargazerCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Language",
                    "kind": "LinkedField",
                    "name": "primaryLanguage",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "topRepositories(first:5,orderBy:{\"direction\":\"DESC\",\"field\":\"STARGAZERS\"})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e9e7b70413000b39184a1b0f60894130",
    "id": null,
    "metadata": {},
    "name": "UserNameQuery",
    "operationKind": "query",
    "text": "query UserNameQuery(\n  $userName: String!\n) {\n  user(login: $userName) {\n    id\n    login\n    name\n    avatarUrl\n    createdAt\n    bio\n    company\n    location\n    url\n    websiteUrl\n    email\n    ...OrganizationsList_user\n    ...TopUserRepo_user\n  }\n}\n\nfragment OrganizationsList_user on User {\n  id\n  login\n  organizations(first: 10) {\n    nodes {\n      id\n      name\n      url\n      avatarUrl\n    }\n  }\n}\n\nfragment TopUserRepo_user on User {\n  topRepositories(first: 5, orderBy: {field: STARGAZERS, direction: DESC}) {\n    nodes {\n      name\n      visibility\n      stargazerCount\n      primaryLanguage {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7535fecfbca1677bf896bd60d42a7909";

export default node;
