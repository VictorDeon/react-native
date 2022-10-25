import React, { Component } from "react";
import { LoginComponent } from "../components/Login";
import { loginAPI } from "../api";
import { loadingAlert, successAlert } from "../../../shared/alerts";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { alert: null };
  }

  __submit = async data => {
    const { navigation } = this.props;
    // this.setState({ alert: loadingAlert("Enviando", "Por favor aguarde!") });

    try {
      const response = await loginAPI(data);
      console.log(response);
      // this.setState({ alert: successAlert("Enviado", "Autenticação realizada com sucesso!") });
      navigation.navigate('Profile', { user: response.data.user })
    } catch(error) {
      console.error(error);
    } finally {
      this.setState({ alert: null });
    }
  }

  render() {
    return (
      <LoginComponent
        submit={this.__submit}
        initialValues={{email: "fulano@gmail.com"}}
        alert={this.state.alert}
      />
    )
  }
}

export default LoginContainer;
