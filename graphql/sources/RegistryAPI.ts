import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class RegistryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://registry-api.example.com/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async postMovie(movie) {
    return this.post(`movies`, movie);
  }

  async newMovie(movie) {
    return this.put(`movies`, movie);
  }

  async updateMovie(movie) {
    return this.patch(`movies`, { id: movie.id, movie });
  }

  async deleteMovie(movie) {
    return this.delete(`movies/${movie.id}`);
  }
}
