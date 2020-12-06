import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormElement from "./form-element";
import BottomLink from "./bottom-login-register-link";
import { REGISTER, URL_USER_LOGIN } from "./urls";
import { getJWTToken, setJWTToken } from "./getToken";

export default class LogInUser extends Component {
  constructor(props) {
    super(props);

    if (getJWTToken() != null) {
      props.history.push("/home");
    }

    // Setting up functions
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      user: "",
      password: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ user: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    //validation
    if (this.state.user === "" || this.state.password === "") {
      console.log("Please enter username and password");
      return;
    }
    const itemObject = {
      user: this.state.user,
      password: this.state.password,
    };

    console.log(itemObject.user + " " + itemObject.password);

    axios.post(URL_USER_LOGIN, itemObject).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        setJWTToken(res.data.token);

        console.log("Valid username and password");
        this.setState({
          user: "",
          password: "",
        });
      } else {
        console.log("Invalid combination of username and password");
        return;
      }
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <h2 className="title1"> Login </h2>

        <Form onSubmit={this.onSubmit}>
          <FormElement
            id="username"
            label="User Name"
            fieldType="text"
            value={this.state.user}
            onChange={this.onChangeUserName.bind(this)}
          />

          <FormElement
            id="password"
            label="Password"
            fieldType="password"
            value={this.state.password}
            onChange={this.onChangePassword.bind(this)}
          />

          <Button variant="primary" size="lg" block="block" type="submit">
            Log In
          </Button>
        </Form>
        <BottomLink
          url={REGISTER}
          text="Don't have an account?"
          name="register"
        />
      </div>
    );
  }
}
