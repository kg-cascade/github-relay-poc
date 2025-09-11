/**
 * @generated SignedSource<<6351a3cfeb7fffd646e33b37a6ed4d38>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Layout_viewer$data = {
  readonly avatarUrl: any;
  readonly login: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "Layout_viewer";
};
export type Layout_viewer$key = {
  readonly " $data"?: Layout_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"Layout_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Layout_viewer",
  "selections": [
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "050988e751733fb62dad9627764ce78b";

export default node;
