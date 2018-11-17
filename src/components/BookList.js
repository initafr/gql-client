import React, { Component } from 'react';
// Graphql
import { graphql } from 'react-apollo';
// Queries
import { getBooksQuery } from '../queries/queries';
// Components
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayBooks() {
    const { data } = this.props;
    const { loading, books } = data;

    if (loading) {
      return <div>Loading...</div>;
    } else {
      return books.map(book => {
        return (
          <li
            key={book.id}
            onClick={e => {
              this.setState({ selected: book.id });
            }}
          >
            {book.name}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
