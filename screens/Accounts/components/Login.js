import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { InputField } from "../../../shared/fields/InputField";
import { SelectField } from '../../../shared/fields/SelectField';
import { RadioField } from "../../../shared/fields/RadioField";
import { CheckboxField } from "../../../shared/fields/CheckboxField";
import { validateLogin } from "../validator";
import { Form, Field } from 'react-final-form';

class LoginComponet extends Component {
  submit = async data => {
    console.log(data);
  }

  render() {
    const EnterText = "Entrar";

    return (
      <View contentContainerStyle={styles.container}>
        <Form
          onSubmit={data => this.submit(data)}
          validate={validateLogin}
          render={({ handleSubmit, submitting, invalid }) => {
            return (
              <View style={styles.formGroup}>
                <Field
                  name="type"
                  placeholder="Selecione o tipo de usuário"
                  disabled={false}
                  options={[
                    {label: 'Maça', value: 'maça'},
                    {label: 'Banana', value: 'banana'},
                    {label: 'Pera', value: 'pera'},
                    {label: 'Abacaxi', value: 'abacaxi'}
                  ]}
                  component={SelectField}
                />

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

                <Field
                  name="score"
                  options={[
                    {label: "Opção 01", value: 0},
                    {label: "Opção 02", value: 2}
                  ]}
                  component={RadioField}
                />

                <Field
                  name="remember"
                  label="Lembrar-me"
                  component={CheckboxField}
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
      </View>
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
