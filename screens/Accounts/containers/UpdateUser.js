import React, { Component } from "react";
import { Alert } from "react-native";
import { UpdateUserComponent } from "../components/UpdateUser";
import { updateUserAPI } from "../api";
import { SCREENS } from "../../../shared/constants";

class UpdateUserContainer extends Component {
  __submit = async data => {
    const { navigation } = this.props;

    try {
      const response = await updateUserAPI(data);
      navigation.navigate(SCREENS.PROFILE, { user: response.data });
    } catch(error) {
      Alert.alert("Ops...", error, [], {cancelable: true})
    }
  }

  render() {
    return (
      <UpdateUserComponent {...this.props} submit={this.__submit} />
    )
  }
}

export default UpdateUserContainer;
