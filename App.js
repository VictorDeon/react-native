import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Profile } from "./screens/Accounts";
import { SCREENS } from "./shared/constants";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
        <Stack.Screen name={SCREENS.LOGIN} component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name={SCREENS.PROFILE} component={Profile} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
