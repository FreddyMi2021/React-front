import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { decryptString, passwordKey } from './BaseUrl';

const httpLink = createHttpLink({
  uri: 'https://school-api.sayna.io/graphql/student ',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const authHeader = JSON.parse(decryptString(localStorage.getItem('currentUser'), passwordKey)).authData;
  // return the headers to the context so httpLink can read them
  return {
    headers: Object.assign({}, headers, authHeader)
  }
});

const studentClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default studentClient;