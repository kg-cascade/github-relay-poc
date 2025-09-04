import type { routes_indexQuery } from '@/routes/__generated__/routes_indexQuery.graphql';
import { createFileRoute } from '@tanstack/react-router';
import { graphql, useLazyLoadQuery } from 'react-relay';

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
    {}
  );

  return (
    <div className="p-2">
      <h3 className="text-test">Welcome Home!</h3>
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
