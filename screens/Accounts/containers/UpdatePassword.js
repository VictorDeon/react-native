import React, { Component } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UpdatePasswordComponent } from "../components/UpdatePassword";
import { updateUserAPI } from "../api";
import { SCREENS } from "../../../shared/constants";

class UpdatePasswordContainer extends Component {
  __submit = async data => {
    const { navigation } = this.props;
    Alert.alert(
      "VWAuth", `Ao modificar a senha você terá que logar novamente.`,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              await updateUserAPI(data);
              await AsyncStorage.removeItem('token');
              navigation.navigate(SCREENS.LOGIN);
            } catch(error) {
              Alert.alert("Ops...", error, [], {cancelable: true})
            }
          }
        }
      ], {cancelable: true}
    );
  }

  render() {
    return (
      <UpdatePasswordComponent {...this.props} submit={this.__submit} />
    )
  }
}

export default UpdatePasswordContainer;
