import { StyleSheet, ScrollView, Button, View } from 'react-native';
import { InputField } from "../../../shared/fields";
import { validateLogin } from "../validator";
import { Form, Field } from 'react-final-form';

export const LoginComponent = props => {
  const { submit, initialValues, alert } = props;
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
              placeholder="Nome de usuário"
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
      {alert ? alert : null}
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
  }
});
