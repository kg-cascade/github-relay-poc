/**
 * @generated SignedSource<<65bdd783e25c35a4bc2b62b5b982070c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthorHoverCardContent_AuthorDetailsFragment$data = {
  readonly avatarUrl: any;
  readonly bio: string | null | undefined;
  readonly company: string | null | undefined;
  readonly createdAt: any;
  readonly email: string;
  readonly id: string;
  readonly isEmployee: boolean;
  readonly isGitHubStar: boolean;
  readonly isHireable: boolean;
  readonly location: string | null | undefined;
  readonly login: string;
  readonly name: string | null | undefined;
  readonly pronouns: string | null | undefined;
  readonly twitterUsername: string | null | undefined;
  readonly updatedAt: any;
  readonly websiteUrl: any | null | undefined;
  readonly " $fragmentType": "AuthorHoverCardContent_AuthorDetailsFragment";
};
export type AuthorHoverCardContent_AuthorDetailsFragment$key = {
  readonly " $data"?: AuthorHoverCardContent_AuthorDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuthorHoverCardContent_AuthorDetailsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuthorHoverCardContent_AuthorDetailsFragment",
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
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isHireable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isEmployee",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isGitHubStar",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "twitterUsername",
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
      "name": "pronouns",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "2ab3aac12296a6862ef7ba5837b232aa";

export default node;
