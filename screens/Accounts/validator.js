export const validateLogin = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'O usuário é obrigatório.';
  }

  if (values.type == "banana") {
    errors.type = "O tipo é obrigatório";
  }

  if (!values.password) {
    errors.password = 'Senha deve ser passado.';
  }

  return errors;
};

export const validateCreateUser = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'O usuário é obrigatório.';
  }

  if (!values.password) {
    errors.password = 'Senha deve ser passado.';
  }

  return errors;
};
