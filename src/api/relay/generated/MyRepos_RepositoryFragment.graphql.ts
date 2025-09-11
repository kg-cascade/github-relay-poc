/**
 * @generated SignedSource<<79437a3801b19b33ee213e532433159e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RepositoryVisibility = "INTERNAL" | "PRIVATE" | "PUBLIC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MyRepos_RepositoryFragment$data = {
  readonly description: string | null | undefined;
  readonly id: string;
  readonly name: string;
  readonly nameWithOwner: string;
  readonly primaryLanguage: {
    readonly name: string;
  } | null | undefined;
  readonly stargazerCount: number;
  readonly visibility: RepositoryVisibility;
  readonly " $fragmentType": "MyRepos_RepositoryFragment";
};
export type MyRepos_RepositoryFragment$key = {
  readonly " $data"?: MyRepos_RepositoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyRepos_RepositoryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyRepos_RepositoryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nameWithOwner",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
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
      "kind": "ScalarField",
      "name": "visibility",
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
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
})();

(node as any).hash = "199fd0619bf1a67c56ca13913853dbfa";

export default node;
