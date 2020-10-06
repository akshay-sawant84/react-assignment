import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Card, Alert } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { onLogin } from "../Redux/Auth/AuthAction";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: null,
    };
  }

  // componentDidMount() {
  //   const { isAuthenticated } = this.props.auth;
  //   if (isAuthenticated) {
  //     this.props.history.push("/home");
  //   }
  // }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    let { username, password } = this.state;
    if (!username || !password) {
      this.setState({ errors: "Please fill the Login form properly" });
    }else if( password.length < 6 ){
      this.setState({ errors : 'Password should be greater 6' })
    }else {
      const newUser = {
        username,
        password,
      };
      this.setState({ errors: null });
      this.props.onLogin(newUser, this.props.history);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Card className="p-3">
              {errors !== null ? (
                <Alert color="danger" className="text-center">
                  {errors}
                </Alert>
              ) : null}
              <h2 className="text-center my-3">Login</h2>
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    name="username"
                    id="exampleEmail"
                    placeholder="Username"
                    onChange={this.onChangeHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="exampleEmail"
                    placeholder="Password"
                    onChange={this.onChangeHandler}
                  />
                </FormGroup>
                <Button color="primary btn-block" onClick={this.onSubmit}>
                  Submit
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null,{onLogin}) (withRouter(Login));
