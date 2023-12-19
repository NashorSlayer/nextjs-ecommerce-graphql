import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: 'https://api-gateway-ecommerce.onrender.com/graphql', //url api-gateway
    cache: new InMemoryCache(),
});

export default client;