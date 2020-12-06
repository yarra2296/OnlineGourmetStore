import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormElement from "./form-element";
import BottomLink from "./bottom-login-register-link";
import { LOGIN, URL_USER_REGISTER } from "./urls";
import { getJWTToken } from "./getToken";

export default class RegisterUser extends Component {
  constructor(props) {
    super(props);

    //TODO: uncomment below lines after logout is implemented
    if (getJWTToken() != null) {
      props.history.push("/home");
    }

    // Setting up functions
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.confirmPassword = this.onChangeConfirmPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    //validation
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.confirmPassword === ""
    ) {
      console.log("Please enter all fields");
      return;
    } else if (this.state.password !== this.state.confirmPassword) {
      console.log("Passwords dont match");
      return;
    }

    console.log(
      itemObject.name + " " + itemObject.email + " " + itemObject.password
    );

    axios.post(URL_USER_REGISTER, itemObject).then((res) => {
      console.log(res.data);
      //TODO: Need to redirect to login after user registered.
    });

    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    this.props.history.push("/login");
  }

  render() {
    return (
            <div class="container">
      <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
      <div className="form-wrapper">
        <h2 className="title1"> Register </h2>

        <Form onSubmit={this.onSubmit}>
          <FormElement
            id="name"
            label="Name"
            fieldType="text"
            value={this.state.name}
            onChange={this.onChangeName.bind(this)}
          />

          <FormElement
            id="email"
            label="Email"
            fieldType="text"
            value={this.state.email}
            onChange={this.onChangeEmail.bind(this)}
          />
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
      </div>
      <div class="col-sm-2"></div>
      </div>
      </div>
    );
  }
}
