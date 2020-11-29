import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormElement from "./form-element";
import BottomLink from "./bottom-login-register-link";
import { LOGIN, URL_USER_REGISTER } from "./urls";

export default class RegisterUser extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.confirmPassword = this.onChangeConfirmPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      user: "",
      password: "",
      confirmPassword: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ user: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const itemObject = {
      user: this.state.user,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    //validation
    if (
      this.state.user === "" ||
      this.state.password === "" ||
      this.state.confirmPassword === ""
    ) {
      console.log("Please enter all fields");
      return;
    } else if (this.state.password === this.state.confirmPassword) {
      console.log("Passwords dont match");
      return;
    }

    console.log(
      itemObject.user +
        " " +
        itemObject.password +
        " " +
        itemObject.confirmPassword
    );
    axios
      .post(URL_USER_REGISTER, itemObject)
      .then((res) => console.log(res.data));

    this.setState({
      user: "",
      password: "",
      confirmPassword: "",
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <h2 className="title1"> Register </h2>

        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="username">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              value={this.state.user}
              onChange={this.onChangeUserName}
            />
          </Form.Group>

          <FormElement
            id="password"
            label="Password"
            fieldType="password"
            value={this.state.password}
            onChange={this.onChangePassword.bind(this)}
          />

          <FormElement
            id="confirmpassword"
            label="Confirm Password"
            fieldType="password"
            value={this.state.confirmPassword}
            onChange={this.onChangeConfirmPassword.bind(this)}
          />

          <Button variant="primary" size="lg" block="block" type="submit">
            Register
          </Button>
        </Form>

        <BottomLink url={LOGIN} text="Already registered?" name="login" />
      </div>
    );
  }
}
