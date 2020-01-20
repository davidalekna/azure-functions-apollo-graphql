import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

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

export class SitecoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://sitecore-api.example.com/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async getMovies(delay: number) {
    return await fakeApi(delay);
  }
}
