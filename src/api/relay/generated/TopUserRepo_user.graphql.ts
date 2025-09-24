/**
 * @generated SignedSource<<50b5208a3cf4c91e1f698ef09d88468e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RepositoryVisibility =
  | 'INTERNAL'
  | 'PRIVATE'
  | 'PUBLIC'
  | '%future added value';
import { FragmentRefs } from 'relay-runtime';
export type TopUserRepo_user$data = {
  readonly topRepositories: {
    readonly nodes:
      | ReadonlyArray<
          | {
              readonly name: string;
              readonly primaryLanguage:
                | {
                    readonly name: string;
                  }
                | null
                | undefined;
              readonly stargazerCount: number;
              readonly visibility: RepositoryVisibility;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
  readonly ' $fragmentType': 'TopUserRepo_user';
};
export type TopUserRepo_user$key = {
  readonly ' $data'?: TopUserRepo_user$data;
  readonly ' $fragmentSpreads': FragmentRefs<'TopUserRepo_user'>;
};

const node: ReaderFragment = (function () {
  var v0 = {
    alias: null,
    args: null,
    kind: 'ScalarField',
    name: 'name',
    storageKey: null,
  };
  return {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'TopUserRepo_user',
    selections: [
      {
        alias: null,
        args: [
          {
            kind: 'Literal',
            name: 'first',
            value: 5,
          },
          {
            kind: 'Literal',
            name: 'orderBy',
            value: {
              direction: 'DESC',
              field: 'STARGAZERS',
            },
          },
        ],
        concreteType: 'RepositoryConnection',
        kind: 'LinkedField',
        name: 'topRepositories',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'Repository',
            kind: 'LinkedField',
            name: 'nodes',
            plural: true,
            selections: [
              v0 /*: any*/,
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'visibility',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'stargazerCount',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'Language',
                kind: 'LinkedField',
                name: 'primaryLanguage',
                plural: false,
                selections: [v0 /*: any*/],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey:
          'topRepositories(first:5,orderBy:{"direction":"DESC","field":"STARGAZERS"})',
      },
    ],
    type: 'User',
    abstractKey: null,
  };
})();

(node as any).hash = '19e5bfc52be6604a7a7694a7224db693';

export default node;
