import { StyleSheet, Text, View, Button } from 'react-native';
import { SCREENS } from "../../../shared/constants";

export const ProfileComponent = props => {
  const { route, navigation, logout } = props;
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Text>Perfil do {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>CPF: {user.cpf}</Text>
      <Text>Telefone: {user.phone}</Text>
      <Button title="Atualizar dados" onPress={() => navigation.navigate(SCREENS.UPDATE_USER, { user })} />
      <Button title="Atualizar senha" onPress={() => navigation.navigate(SCREENS.UPDATE_PASSWORD, { user })} />
      <Button title="Desativar usuário" onPress={() => console.log("desativar usuário")} />
      <Button title="Sair" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
