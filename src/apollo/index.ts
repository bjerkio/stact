import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const uri = process.env.REACT_APP_APOLLO_URL
if (!uri) throw new Error(`REACT_APP_APOLLO_URL is not defined`);

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          // eslint-disable-next-line no-console
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
      if (networkError) {
        // eslint-disable-next-line no-console
        console.error(`[Network error]: ${networkError}`);
      }
    }),
    new HttpLink({
      uri
    }),
  ]),
  cache
});

export default client;
