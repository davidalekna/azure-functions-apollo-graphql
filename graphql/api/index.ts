import { merge } from "lodash";
import movie from "./movie";

const typeDefs = [movie.typeDefs];

const resolvers = merge({}, movie.resolvers);

const schema = {
  typeDefs,
  resolvers,
  formatError: (error: any) => {
    return error;
  },
  formatResponse: (response: any) => {
    return response;
  },
  context: async ({ event, context }) => {
    return {
      headers: event.headers,
      functionName: context.functionName,
      event,
      context
    };
  },
  introspection: true,
  playground: true
};

export { schema as default, typeDefs, resolvers };
