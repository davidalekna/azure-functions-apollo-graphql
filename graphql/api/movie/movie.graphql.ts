import { gql } from 'apollo-server-azure-functions';

export default gql`
  type Movie {
    id: ID
    title: String
    release_date: String
    count_stars: Int
    director_id: ID
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
  }

  type Query {
    getMovies(timeout: Int): [Movie]
    getUsers: [User]
  }
`;
