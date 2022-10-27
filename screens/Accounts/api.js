export const loginAPI = async data => {
  return await {
    data: {
      token: "...",
      user: {
        name: "Fulano de Tal",
        username: data.username,
        type: "Professor",
        cpf: "123456789",
        email: "fulano@gmail.com"
      }
    }
  }
}

export const createUserAPI = async data => {
  return await {
    data: {
      user: {
        name: "Fulano de Tal",
        username: data.username,
        type: "Professor",
        cpf: "123456789",
        email: "fulano@gmail.com"
      }
    }
  }
}
