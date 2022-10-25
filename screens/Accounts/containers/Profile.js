import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import { ProfileComponent } from "../components/Profile";
import { SCREENS } from "../../../shared/constants";
import { isAuthenticated } from "../../../shared/utils";
import { updateUserAPI } from "../api";

class ProfileContainer extends Component {
  async componentDidMount() {
    const { navigation } = this.props;
    if (!await isAuthenticated()) {
      Alert.alert("OPS...", "Você precisa está autenticado para acessar essa página!", [], {cancelable: true});
      navigation.navigate(SCREENS.LOGIN, { user: response.data.user });
    }
  }

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

  __desactivate = async () => {
    const { navigation, route } = this.props;
    const { user } = route.params;
    Alert.alert(
      "VWAuth", `Tem certeza que deseja desativar o seu usuário?`,
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: async () => {
            try {
              await updateUserAPI({ is_active: false });
              await AsyncStorage.removeItem('token');
              navigation.navigate(SCREENS.LOGIN);
              Alert.alert(
                "VWAuth", `Usuário ${user.name} desativado com sucesso!`,
                [], {cancelable: true}
              );
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
      <ProfileComponent
        {...this.props}
        logout={this.__logout}
        desactivate={this.__desactivate}
      />
    )
  }
}

export default ProfileContainer;
