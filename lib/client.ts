import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({

    uri: 'http://localhost:3000/graphql', //url api-gateway
    cache: new InMemoryCache(),
});

export default client;