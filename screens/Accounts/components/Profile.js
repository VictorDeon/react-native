import { StyleSheet, Text, View, Button } from 'react-native';

export const ProfileComponent = ({ route, navigation }) => {
    const { user } = route.params;
    return (
      <View style={styles.container}>
        <Text>Perfil do {user.name}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
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
