import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;

const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      id
      name
      genre
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation };
