import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Accounts/components/Login";
import Home from "./screens/Accounts/components/Home";
import CreateUser from "./screens/Accounts/components/CreateUser";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name={'Home'} component={Home} options={{ title: 'Pagina Inicial' }} />
        <Stack.Screen name={'CreateUser'} component={CreateUser} options={{ title: 'Criar Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
