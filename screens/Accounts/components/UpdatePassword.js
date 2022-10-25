import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Form, Field } from 'react-final-form';
import { InputField } from "../../../shared/fields";
import { validateUpdatePassword } from "../validator";

export const UpdatePasswordComponent = props => {
  const { navigation, submit } = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Atualizar senha</Text>
      <Form
        onSubmit={data => submit(data)}
        validate={validateUpdatePassword}
        render={({ handleSubmit, submitting, invalid }) => (
          <View style={styles.formGroup}>
            <Field
              secureTextEntry
              name="old_password"
              placeholder="Antiga senha"
              component={InputField}
            />

            <Field
              secureTextEntry
              name="new_password"
              placeholder="Nova senha"
              component={InputField}
            />

            <Button
              title="Atualizar"
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
});
