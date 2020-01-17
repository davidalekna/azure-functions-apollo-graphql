import axios from 'axios';

const fakeApi = (delay: number = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'The Lion King',
          release_date: '2019',
          count_stars: 7,
          director_id: 1,
        },
        {
          id: 2,
          title: 'The Informer',
          release_date: '2019',
          count_stars: 6,
          director_id: 1,
        },
        {
          id: 3,
          title: 'Fast & Furious Presents: Hobbs & Shaw',
          release_date: '2019',
          count_stars: 6,
          director_id: 2,
        },
      ]);
    }, delay);
  });
};

export default {
  Query: {
    getMovies: async (_, { timeout }) => {
      return await fakeApi(timeout);
    },
    getUsers: async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      return response.data;
    },
  },
};
