import {
  Environment,
  Network,
  RecordSource,
  Store,
  type FetchFunction,
} from 'relay-runtime';

const GITHUB_AUTH_TOKEN = import.meta.env.VITE_GITHUB_AUTH_TOKEN;
const HTTP_ENDPOINT = 'https://api.github.com/graphql';

if (!GITHUB_AUTH_TOKEN) {
  throw new Error('VITE_GITHUB_AUTH_TOKEN is not defined');
}

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: request.text, variables }),
  });

  if (!resp.ok) {
    throw new Error('Response failed.');
  }
  return await resp.json();
};

export const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
