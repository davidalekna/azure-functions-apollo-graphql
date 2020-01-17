import { ApolloServer } from 'apollo-server-azure-functions';
import config from './api';

const server = new ApolloServer(config);

export const graphqlHandler = server.createHandler();
