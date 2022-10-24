import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Profile({ route, navigation }) {
    const { name } = route.params;
    return (
      <View style={styles.container}>
        <Text>Perfil do {name}</Text>
        <StatusBar style="auto" />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });