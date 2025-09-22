/**
 * @generated SignedSource<<52fe7b7aa6e7946428477547c840dfa5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrganizationsList_user$data = {
  readonly id: string;
  readonly login: string;
  readonly organizations: {
    readonly nodes: ReadonlyArray<{
      readonly avatarUrl: any;
      readonly id: string;
      readonly name: string | null | undefined;
      readonly url: any;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "OrganizationsList_user";
};
export type OrganizationsList_user$key = {
  readonly " $data"?: OrganizationsList_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrganizationsList_user">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrganizationsList_user",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
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
            (v0/*: any*/),
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
              "name": "url",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "avatarUrl",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "organizations(first:10)"
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "5cdf0fd2d64752d1ee3f13c4dc9e20ff";

export default node;
