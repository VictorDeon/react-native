import React, { Component } from "react";
import { Alert } from "react-native";
import { CreateUserComponent } from "../components/CreateUser";
import { createUserAPI } from "../api";
import { SCREENS } from "../../../shared/constants";

class CreateUserContainer extends Component {
  __submit = async data => {
    const { navigation } = this.props;

    try {
      await createUserAPI(data);
      navigation.navigate(SCREENS.LOGIN);
      Alert.alert(
        "VWAuth", "Obrigado por se cadastrar, realize o seu login!",
        [], {cancelable: true}
      );
    } catch(error) {
      Alert.alert("Ops...", error, [], {cancelable: true})
    }
  }

  render() {
    return (
      <CreateUserComponent {...this.props} submit={this.__submit} />
    )
  }
}

export default CreateUserContainer;
