/**
 * @generated SignedSource<<82dbd249374c94018ed23bca9724d043>>
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
  readonly login: string;
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
      "name": "login",
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

(node as any).hash = "08b7fd2ac359ac9be595e2ea4586cc93";

export default node;
