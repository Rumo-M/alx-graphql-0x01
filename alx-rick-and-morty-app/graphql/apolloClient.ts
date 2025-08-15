// graphql/apolloClient.ts

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Set up the Apollo Client instance
const client = new ApolloClient({
  // The URI of the GraphQL API endpoint
  uri: 'https://your-graphql-api-endpoint.com/graphql', // Replace with your actual GraphQL API URL
  // Setting the cache to InMemoryCache, which is used to cache the query results
  cache: new InMemoryCache(),
  // Optional: Setting up additional configuration like authorization headers or custom fetch options
  link: new HttpLink({
    uri: 'https://your-graphql-api-endpoint.com/graphql', // Replace with your actual GraphQL API URL
    fetchOptions: {
      method: 'POST', // The request method for GraphQL queries
    },
  }),
});

export default client;
