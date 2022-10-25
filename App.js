import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Profile, UpdateUser, CreateUser } from "./screens/Accounts";
import { SCREENS } from "./shared/constants";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
        <Stack.Screen name={SCREENS.LOGIN} component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name={SCREENS.PROFILE} component={Profile} options={{ title: 'Perfil' }} />
        <Stack.Screen name={SCREENS.UPDATE_USER} component={UpdateUser} options={{ title: 'Atualizar Dados' }} />
        <Stack.Screen name={SCREENS.CREATE_USER} component={CreateUser} options={{ title: 'Criar Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
