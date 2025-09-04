import { createFileRoute } from '@tanstack/react-router';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { routes_indexQuery } from '../__generated__/routes_indexQuery.graphql';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const data = useLazyLoadQuery<routes_indexQuery>(
    graphql`
      query routes_indexQuery {
        viewer {
          login
          name
        }
      }
    `,
    {},
  );

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {data.viewer && (
        <>
          <p>
            Logged in as: <strong>{data.viewer.login}</strong>
          </p>
          <p>
            Name: <strong>{data.viewer.name}</strong>
          </p>
        </>
      )}
    </div>
  );
}

