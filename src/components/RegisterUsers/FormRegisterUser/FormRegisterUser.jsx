import React, { Component } from "react";

const INITIAL = {
  name: "",
  email: "",
  password: "",
};
export default class FormRegisterUser extends Component {
  state = {
    ...INITIAL,
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ ...INITIAL });
  };

  render() {
    const { name, password, email } = this.state;
    return (
      <div>
        FormRegisterUser
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit"> Enter</button>
        </form>
      </div>
    );
  }
}
