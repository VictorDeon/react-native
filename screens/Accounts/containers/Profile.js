import React, { Component } from "react";
import { ProfileComponent } from "../components/Profile";
import AsyncStorage from '@react-native-async-storage/async-storage';

class ProfileContainer extends Component {
  __logout = async () => {
    const { navigation } = this.props;
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  }

  render() {
    return (
      <ProfileComponent {...this.props} logout={this.__logout} />
    )
  }
}

export default ProfileContainer;
