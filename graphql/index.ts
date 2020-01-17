// import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { ApolloServer } from "apollo-server-azure-functions";
import config from "./api";

const server = new ApolloServer(config);

// const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {}

export const graphqlHandler = server.createHandler();
