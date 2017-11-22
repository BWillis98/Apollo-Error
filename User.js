import React from 'react';
import { Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// class User extends React.Component {
//   render() {
//     this.props.data.otsUserByUserId.firstName = ""
//     alert(this.props.children)
//     if (this.props.data.loading){
//       return <Text>Loading...</Text>;
//     }else{
//       return (
//         <Text>{this.props.data.otsUserByUserId.firstName} should be loaded</Text>
//       );
//     }
//   }
// }

function FunctionUser({ data }) {
  if (data.loading) {
    return <Text>Loading</Text>;
  } else {
    return (
      <Text>{data.otsUserByUserId.firstName}</Text>
    );
  }
}

export default graphql(gql`
query {
  otsUserByUserId(userId: 1) {
    firstName
    lastName
  }
}
`)(FunctionUser)