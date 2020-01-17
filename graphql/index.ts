// import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { ApolloServer, gql } from "apollo-server-azure-functions";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

export const graphqlHandler = server.createHandler();

// const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {}
