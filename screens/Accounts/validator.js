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

export const validateCreateUser = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email é obrigatório.';
  }

  if (!validateEmail(values.email)) {
    errors.email = 'Email inválido!'
  }

  if (!values.name) {
    errors.name = 'Nome deve ser passado.';
  }

  if (!values.password) {
    errors.password = 'Senha deve ser passado.';
  }

  return errors;
};

export const validateUpdateUser = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email é obrigatório.';
  }

  if (!validateEmail(values.email)) {
    errors.email = 'Email inválido!'
  }

  return errors;
}

export const validateUpdatePassword = values => {
  const errors = {};

  if (!values.old_password) {
    errors.old_password = 'Antiga senha é obrigatório.';
  }

  if (!values.new_password) {
    errors.new_password = 'Nova senha é obrigatório.';
  }

  return errors;
}
