import React, { Component } from 'react';
// Graphql
import { graphql } from 'react-apollo';
// Queries
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  displayBooks() {
    const { data } = this.props;
    const { loading, books } = data;
    console.log('ListBooks', books);

    if (loading) {
      return <div>Loading...</div>;
    } else {
      return books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
