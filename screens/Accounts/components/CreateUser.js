import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { InputField } from "../../../shared/fields/InputField";
import { validateCreateUser } from "../validator";
import { Form, Field } from 'react-final-form';
import { createUserAPI } from "../api";

class CreateUserComponet extends Component {
  submit = async data => {
    const { navigation } = this.props;
    console.log(data);
    const response = await createUserAPI(data)
    navigation.navigate('Home', { user: response.data.user })
  }

  render() {
    const { navigation } = this.props;
    const enterText = "Criar";
    const backText = "Voltar";

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Cadastro</Text>
        <Form
          onSubmit={data => this.submit(data)}
          validate={validateCreateUser}
          render={({ handleSubmit, submitting, invalid }) => {
            return (
              <View style={styles.formGroup}>
                <Field
                  name="type"
                  placeholder="Selecione seu tipo (Select)"
                  component={InputField}
                />

                <Field
                  name="username"
                  placeholder="Usuário"
                  component={InputField}
                />

                <Field
                  name="email"
                  placeholder="Email"
                  component={InputField}
                />

                <Field
                  name="cpf"
                  placeholder="CPF"
                  component={InputField}
                />

                <Field
                  secureTextEntry
                  name="password"
                  placeholder="Senha"
                  component={InputField}
                />

                <Field
                  secureTextEntry
                  placeholder="Confirmação de senha"
                  name="confirm_password"
                  component={InputField}
                />

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={submitting || invalid ? styles.disabledBtn : styles.button}
                  disabled={submitting || invalid}>
                  <Text style={styles.btnText}>{enterText}</Text>
                </TouchableOpacity>
              </View>)
            }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{backText}</Text>
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

export default CreateUserComponet;

