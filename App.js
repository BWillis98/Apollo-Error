import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import User from './User'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://127.0.0.1:5000/graphql' }),
  cache: new InMemoryCache(),
});

export default class App extends React.Component{
  render() {
    return(
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <User/>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});