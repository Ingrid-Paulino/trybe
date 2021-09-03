import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }

    // FORMA 1
    // this.handleChange = this.handleChange.bind(this); //se usarmos ArrowFunction Não precisa de bind

    // this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  // FORMA 1
  //Não é recomendado fazer uma função por input
  //se usarmos ArrowFunction Não precisa de bind
  // handleChange = (event) => { 
  //   this.setState({ email: event.target.value });
  // }

  // handleChangePassword (event) { 
  //   this.setState({ password: event.target.value });
  // }

  handleChange (event) { 
    //event.target.name vai funcionar para todos os inputs
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    alert(` O login foi realizado ${email} `)

  }

  render() {
    const { email, password } = this.state;

    return (
    <section className="login-form">
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        {/* FORMA 1 */}
        {/* Referencia: https://pt-br.reactjs.org/docs/forms.html */}
        {/* <label htmlFor="email">
          Email:
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={ email }
            onChange={ this.handleChange } //handleChange é a função
          />
        </label>
        <label htmlFor="password">
          Password
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={ password }
            onChange={ this.handleChangePassword } //handleChange é a função
          />
        </label> */}

        <label htmlFor="email">
                  Email:
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={ email }
                    onChange={ this.handleChange } //handleChange é a função
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={ password }
                    onChange={ this.handleChange } //handleChange é a função
                  />
                </label>
                <button type="submit">Fazer login</button>
      </form>
    </section>
    )
  }
}

export default LoginForm;