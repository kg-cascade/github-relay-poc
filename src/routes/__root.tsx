import { createRootRoute } from '@tanstack/react-router';
import Layout from '../components/layout/Layout';
import { graphql, useLazyLoadQuery } from 'react-relay';
import type { RootQuery } from './__generated__/RootQuery.graphql';

export const Route = createRootRoute({
  component: () => {
    const data = useLazyLoadQuery<RootQuery>(
      graphql`
        query RootQuery {
          viewer {
            ...Layout_viewer
          }
        }
      `,
      {}
    );
    return <Layout viewer={data.viewer} />;
  },
});
