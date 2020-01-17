import { Context, HttpRequest } from '@azure/functions';
import { RegistryAPI, SitecoreAPI } from '../sources';
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
  dataSources: () => {
    return {
      registryAPI: new RegistryAPI(),
      sitecoreAPI: new SitecoreAPI(),
    };
  },
  context: async ({ request, context }: ContextProps) => {
    return { request, context };
  },
  introspection: true,
  playground: true,
};

export { schema as default, typeDefs, resolvers };
