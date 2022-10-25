import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginComponent } from "../components/Login";
import { loginAPI } from "../api";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { alert: null };
  }

  __submit = async data => {
    const { navigation } = this.props;

    try {
      const response = await loginAPI(data);
      await AsyncStorage.setItem('token', response.data.token)
      navigation.navigate('Profile', { user: response.data.user })
    } catch(error) {
      console.error(error);
    } finally {
      this.setState({ alert: null });
    }
  }

  render() {
    return (
      <LoginComponent
        submit={this.__submit}
        initialValues={{email: "fulano@gmail.com"}}
        alert={this.state.alert}
      />
    )
  }
}

export default LoginContainer;
