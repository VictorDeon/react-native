import { validateEmail } from "../../shared/validators";

export const validateLogin = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email é obrigatório.';
  }

  if (!validateEmail(values.email)) {
    errors.email = 'Email inválido!'
  }

  if (!values.password) {
    errors.password = 'Senha deve ser passado.';
  }

  return errors;
};
