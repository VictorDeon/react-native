import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import { ProfileComponent } from "../components/Profile";
import { SCREENS } from "../../../shared/constants";

class ProfileContainer extends Component {
  __logout = async () => {
    const { navigation, route } = this.props;
    const { user } = route.params;
    await AsyncStorage.removeItem('token');
    navigation.navigate(SCREENS.LOGIN);
    Alert.alert(
      "VWAuth", `Obrigado por utilizar nossos sitemas ${user.name}!`,
      [], {cancelable: true}
    );
  }

  render() {
    return (
      <ProfileComponent {...this.props} logout={this.__logout} />
    )
  }
}

export default ProfileContainer;
