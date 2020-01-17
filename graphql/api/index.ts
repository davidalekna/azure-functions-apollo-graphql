import { Context, HttpRequest } from '@azure/functions';
import { merge } from 'lodash';
import movie from './movie';

const typeDefs = [movie.typeDefs];

const resolvers = merge({}, movie.resolvers);

type ContextProps = {
  request: HttpRequest;
  context: Context;
};

const schema = {
  typeDefs,
  resolvers,
  formatError: (err: any) => err,
  formatResponse: (resp: any) => resp,
  context: async ({ request: req, context }: ContextProps) => {
    return { req, context };
  },
  introspection: true,
  playground: true,
};

export { schema as default, typeDefs, resolvers };
