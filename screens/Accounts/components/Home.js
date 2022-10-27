import React, { Component } from "react";
import { Text } from "react-native";

class Home extends Component {
  render() {
    const { route } = this.props;
    const { user } = route.params;

    return (
      <Text>Bem vindo! {user.name}</Text>
    )
  }
}

export default Home;
