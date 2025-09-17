/**
 * @generated SignedSource<<4c079b05186e04268a04fd1f6e64db35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoggedUser_user$data = {
  readonly avatarUrl: any;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "LoggedUser_user";
};
export type LoggedUser_user$key = {
  readonly " $data"?: LoggedUser_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"LoggedUser_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LoggedUser_user",
  "selections": [
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

(node as any).hash = "5081b4f7ce9e5a1a250e697ba0aee5d0";

export default node;
