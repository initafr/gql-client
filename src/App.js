import React, { Component } from 'react';
// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// ApolloClient config
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Books</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
