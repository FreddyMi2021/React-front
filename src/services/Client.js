import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://school-api.sayna.io/graphql/public',
  cache: new InMemoryCache()
});

export default client;