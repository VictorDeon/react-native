import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Form, Field } from 'react-final-form';
import { InputField } from "../../../shared/fields";
import { validateUpdateUser } from "../validator";

export const UpdateUserComponent = props => {
  const { route, navigation, submit } = props;
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Atualizar dados</Text>
      <Form
        onSubmit={data => submit(data)}
        initialValues={{...user}}
        validate={validateUpdateUser}
        render={({ handleSubmit, submitting, invalid }) => (
          <View style={styles.formGroup}>
            <Field
              name="name"
              placeholder="Nome do usuário"
              component={InputField}
            />

            <Field
              name="cpf"
              placeholder="CPF do usuário"
              component={InputField}
            />

            <Field
              name="phone"
              placeholder="Telefone do usuário"
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
