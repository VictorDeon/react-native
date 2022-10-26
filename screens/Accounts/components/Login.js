import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { InputField } from "../../../shared/fields/InputField";
import { validateLogin } from "../validator";
import { Form, Field } from 'react-final-form';

class LoginComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null}
  }

  submit = async data => {
    const { navigation } = this.props;
    console.log(data);
    // Enviou os dados para o servidor via REST e recebeu de volta os dados do usuário e token
    this.setState({
      token: "...",
      user: {
        name: "Fulano de Tal",
        username: data.username,
        type: "Professor",
        cpf: "123456789",
        email: "fulano@gmail.com"
      }
    })
    navigation.navigate('Home', { user: this.state.user })
  }

  render() {
    const { navigation } = this.props;
    const EnterText = "Entrar";
    const CreateUserText = "Criar Usuário";

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Form
          onSubmit={data => this.submit(data)}
          validate={validateLogin}
          render={({ handleSubmit, submitting, invalid }) => (
            <View style={styles.formGroup}>
              <Field
                name="username"
                component={InputField}
              />

              <Field
                secureTextEntry
                name="password"
                component={InputField}
              />

              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.loginBtn}
                disabled={submitting || invalid}>
                <Text>{EnterText}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
          <Text>{CreateUserText}</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    color: "red",
  },
  formGroup: {
    paddingLeft: 50,
    paddingRight: 50
  }
});

export default LoginComponet;
