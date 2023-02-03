import { Component } from "react";
import { nanoid } from "nanoid";
import FormRegisterUser from "./FormRegisterUser/FormRegisterUser";
import RegisterUserList from "./RegisterUserList/RegisterUserList";

export default class RegisterUsers extends Component {
  state = {
    items: [],
  };
  addUser = (data) => {
    this.setState(({ items }) => {
      const newUser = { ...data, id: nanoid() };
      return {
        items: [newUser, ...items],
      };
    });
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <FormRegisterUser onSubmit={this.addUser} />
        <RegisterUserList items={items} />
      </div>
    );
  }
}
