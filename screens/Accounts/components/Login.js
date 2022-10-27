import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { InputField } from "../../../shared/fields/InputField";
import { validateLogin } from "../validator";
import { Form, Field } from 'react-final-form';
import { loginAPI } from "../api";

class LoginComponet extends Component {
  submit = async data => {
    const { navigation } = this.props;
    console.log(data);
    const response = await loginAPI(data)
    navigation.navigate('Home', { user: response.data.user })
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
          render={({ handleSubmit, submitting, invalid }) => {
            return (
              <View style={styles.formGroup}>
                <Field
                  name="username"
                  placeholder="Usuário"
                  component={InputField}
                />

                <Field
                  secureTextEntry
                  name="password"
                  placeholder="Senha"
                  component={InputField}
                />

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={submitting || invalid ? styles.disabledBtn : styles.button}
                  disabled={submitting || invalid}>
                  <Text style={styles.btnText}>{EnterText}</Text>
                </TouchableOpacity>
              </View>)
            }}
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
  btnText: {
    color: "white",
  },
  button: {
    backgroundColor: "green",
    padding: 10
  },
  disabledBtn: {
    backgroundColor: "red",
    padding: 10
  },
  formGroup: {
    paddingLeft: 50,
    paddingRight: 50
  }
});

export default LoginComponet;
