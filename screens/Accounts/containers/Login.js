import React, { Component } from "react";
import { LoginComponent } from "../components/Login";

class LoginContainer extends Component {
  __submit = async data => {
    const { navigation } = this.props;
    console.log(data);
    navigation.navigate('Profile', {
      userId: 86,
      name: 'Fulano de tal',
    })
  }

  render() {
    return (
      <LoginComponent
        submit={this.__submit}
        initialValues={{email: "fulano@gmail.com"}}
      />
    )
  }
}

export default LoginContainer;
