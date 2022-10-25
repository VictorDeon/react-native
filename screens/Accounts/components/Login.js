import { StyleSheet, ScrollView, Button, View } from 'react-native';
import { InputField } from "../../../shared/fields";
import { validateLogin } from "../validator";
import { Form, Field } from 'react-final-form';
import { SCREENS } from '../../../shared/constants';

export const LoginComponent = props => {
  const { submit, initialValues, navigation } = props;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Form
        onSubmit={data => submit(data)}
        initialValues={initialValues}
        validate={validateLogin}
        render={({ handleSubmit, submitting, invalid }) => (
          <View style={styles.formGroup}>
            <Field
              name="email"
              placeholder="Email de autenticação"
              component={InputField}
            />

            <Field
              secureTextEntry
              name="password"
              placeholder="Senha"
              component={InputField}
            />

            <Button
              title="Entrar"
              onPress={handleSubmit}
              disabled={submitting || invalid}
            />
          </View>
        )}
      />
      <Button style={styles.button} title="Criar usuário" onPress={() => navigation.navigate(SCREENS.CREATE_USER)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formGroup: {
    paddingLeft: 50,
    paddingRight: 50
  },
  button: {
    marginTop: 20
  }
});
