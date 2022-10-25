import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import { LoginComponent } from "../components/Login";
import { loginAPI } from "../api";

class LoginContainer extends Component {
  __submit = async data => {
    const { navigation } = this.props;

    try {
      const response = await loginAPI(data);
      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate('Profile', { user: response.data.user });
      Alert.alert(
        "VWAuth", `Bem vindo ${response.data.user.name}!`,
        [], {cancelable: true}
      );
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
      />
    )
  }
}

export default LoginContainer;
