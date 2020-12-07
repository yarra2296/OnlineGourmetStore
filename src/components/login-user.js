import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormElement from "./form-element";
import BottomLink from "./bottom-login-register-link";
import { REGISTER, URL_USER_LOGIN } from "./urls";
import { getJWTToken, setJWTToken, setUserName } from "./getToken";
import { withRouter } from "react-router-dom";

class LogInUser extends Component {
  constructor(props) {
    super(props);

    if (getJWTToken() != null) {
      props.history.push("/");
    }

    // Setting up functions
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      user: "",
      password: "",
      error: "",
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
      this.setState({
        error: "Please enter username and password",
      });

      return;
    }

    //check if admin
    if (this.state.user === "admin" && this.state.password === "admin") {
      setJWTToken("admin");
      setUserName("admin");

      this.setState({
        user: "",
        password: "",
        error: "",
      });

      this.props.history.push("/");
      return;
    }

    const itemObject = {
      user: this.state.user,
      password: this.state.password,
    };

    axios.post(URL_USER_LOGIN, itemObject).then((res) => {
      if (res.status === 200) {
        setJWTToken(res.data.token);
        setUserName(res.data.user.name);
        this.setState({
          user: "",
          password: "",
          error: "",
        });

        this.props.history.push("/");
      } else {
        this.setState({
          error: res.data.errorMessage,
        });

        return;
      }
    });
  }

  render() {
    return (
      <div className="form-wrapper container" style={{ marginTop: "50px" }}>
        <h2 className="title1"> Login </h2>
        <div className="alert-danger">
          <p>{this.state.error}</p>
        </div>
        <Form onSubmit={this.onSubmit}>
          <FormElement
            id="username"
            label="Email"
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

export default withRouter(LogInUser);
