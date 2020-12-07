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

    //validation
    /**
     * 1. all fields
     * 2. password == samepassword
     * 3. cannot use admin
     * 4. Regex
     * 5. email duplicate not allowed (in api)
     * 6. checkpassword is strong enough
     */

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.confirmPassword === ""
    ) {
      this.setState({
        error: "Please enter all fields",
      });
      return;
    }
    const emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    const passwordPattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!emailPattern.test(this.state.email)) {
      this.setState({
        error: "Please enter a valid email id",
      });
      return;
    }
    if (!passwordPattern.test(this.state.password)) {
      this.setState({
        error:
          " Password must be atleast 8 characters long, atleast one uppercase, lowercase and one digit and one special character",
      });
      return;
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: "Passwords dont match",
      });
      return;
    }

    const itemObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(URL_USER_REGISTER, itemObject).then((res) => {
      console.log(res.data);
      //TODO: Need to redirect to login after user registered.
      if (res.status !== 200) {
        this.setState({
          error: res.data.errorMessage,
        });
        return;
      }
      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      this.props.history.push("/login");
    });
  }

  render() {
    return (
      <div className="form-wrapper container" style={{ marginTop: "50px" }}>
        <h2 className="title1"> Register </h2>
        <div className="alert-danger">
          <p>{this.state.error}</p>
        </div>
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
    );
  }
}
