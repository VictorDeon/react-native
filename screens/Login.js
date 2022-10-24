import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login(props) {
    console.log(props);
    return (
      <View style={styles.container}>
        <Text>LOGIN</Text>
        <StatusBar style="auto" />
        <Button
            title="Go to Profile"
            onPress={() => props.navigation.navigate('Profile', {
                userId: 86,
                name: 'Fulano de tal',
              })}
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
  