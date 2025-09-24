/**
 * @generated SignedSource<<828a2bb1fd8a98a5636c7958bbc94501>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type ContributionHeatmap_user$data = {
  readonly contributionsCollection: {
    readonly contributionCalendar: {
      readonly totalContributions: number;
      readonly weeks: ReadonlyArray<{
        readonly contributionDays: ReadonlyArray<{
          readonly color: string;
          readonly contributionCount: number;
          readonly date: any;
          readonly weekday: number;
        }>;
      }>;
    };
  };
  readonly ' $fragmentType': 'ContributionHeatmap_user';
};
export type ContributionHeatmap_user$key = {
  readonly ' $data'?: ContributionHeatmap_user$data;
  readonly ' $fragmentSpreads': FragmentRefs<'ContributionHeatmap_user'>;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'ContributionHeatmap_user',
  selections: [
    {
      alias: null,
      args: null,
      concreteType: 'ContributionsCollection',
      kind: 'LinkedField',
      name: 'contributionsCollection',
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'ContributionCalendar',
          kind: 'LinkedField',
          name: 'contributionCalendar',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'totalContributions',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'ContributionCalendarWeek',
              kind: 'LinkedField',
              name: 'weeks',
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'ContributionCalendarDay',
                  kind: 'LinkedField',
                  name: 'contributionDays',
                  plural: true,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'contributionCount',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'date',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'weekday',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'color',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ],
  type: 'User',
  abstractKey: null,
};

(node as any).hash = 'caaadfa6d095e30fc1d3be874dbb297e';

export default node;
