/**
 * @generated SignedSource<<4b5fa87da0c4d172aa6499f2d6e4bcca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Layout_viewer$data = {
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "c4e777e53f669ecaced01bd8e3f39a89";

export default node;
