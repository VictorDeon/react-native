import { StyleSheet, ScrollView, Button, View } from 'react-native';
import { InputField } from "../../../shared/fields";
import { validateLogin } from "../validator";
import { Form, Field } from 'react-final-form';

export const CreateUserComponent = props => {
  const { submit, navigation } = props;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Form
        onSubmit={data => submit(data)}
        validate={validateLogin}
        render={({ handleSubmit, submitting, invalid }) => (
          <View style={styles.formGroup}>
            <Field
              name="email"
              placeholder="Email de autenticação"
              component={InputField}
            />

            <Field
              name="name"
              placeholder="Nome do usuário"
              component={InputField}
            />

            <Field
              secureTextEntry
              name="password"
              placeholder="Senha de autenticação"
              component={InputField}
            />

            <Button
              title="Criar"
              onPress={handleSubmit}
              disabled={submitting || invalid}
            />
          </View>
        )}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
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
