import axios from 'axios';
import { IResolvers } from 'graphql-tools';

const respolvers: IResolvers = {
  Query: {
    getMovies: async (_, { timeout }, { dataSources }) => {
      return await dataSources.sitecoreAPI.getMovies(timeout);
    },
    getUsers: async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      return response.data;
    },
  },
};

export default respolvers;
