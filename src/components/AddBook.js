import React, { Component } from 'react';
// Graphql
import { graphql } from 'react-apollo';
// Queries
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  displayAuthor() {
    const { data } = this.props;
    const { loading, authors } = data;
    console.log('Authors', authors);

    if (loading) {
      return <option>Loading authors...</option>;
    } else {
      return authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
            {this.displayAuthor()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
