import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import { LoginComponent } from "../components/Login";
import { loginAPI } from "../api";
import { SCREENS } from "../../../shared/constants";

class LoginContainer extends Component {
  __submit = async data => {
    const { navigation } = this.props;

    try {
      const response = await loginAPI(data);
      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate(SCREENS.PROFILE, { user: response.data.user });
      Alert.alert(
        "VWAuth", `Bem vindo ${response.data.user.name}!`,
        [], {cancelable: true}
      );
    } catch(error) {
      Alert.alert("Ops...", error, [], {cancelable: true})
    }
  }

  render() {
    return (
      <LoginComponent
        {...this.props}
        submit={this.__submit}
        initialValues={{email: "fulano@gmail.com"}}
      />
    )
  }
}

export default LoginContainer;
