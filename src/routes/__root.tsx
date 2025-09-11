import type { RootQuery } from '@/api/relay/generated/RootQuery.graphql';
import { createRootRoute } from '@tanstack/react-router';
import { graphql, useLazyLoadQuery } from 'react-relay';
import Layout from '../components/layout/Layout';

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
