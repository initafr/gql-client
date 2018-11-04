import React, { Component } from 'react';
// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// Components
import BookList from './components/BookList';

// ApolloClient config
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>My client</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
