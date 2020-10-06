import React, { Component } from "react";
import MenuBar from "../Reusable/MenuBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, FormGroup, Label, Input, Card } from "reactstrap";
import { onUserLogout, newPassword } from "../Redux/Auth/AuthAction";

class User extends Component {
  constructor() {
    super();
    this.state = {
      change: false,
      password: "",
      username: "",
    };
  }

  componentDidMount() {
    const { user } = this.props.auth;
    this.setState({ password: user.password, username: user.username });
  }

  shown = () => {
    this.setState({ change: true });
    const { user } = this.props.auth;
    this.setState({ username: user.username, password: user.password });
  };

  onChangePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  onPasswordSubmit = (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { username, password } = this.state;
    if (this.state.password.length < 6) {
      alert("password should be greater than 6");
      this.setState({ password: user.password });
    } else {
      let data = {
        username,
        password,
      };
      this.props.newPassword(data);
    }

    this.setState({ change: false });
  };

  onLogoutSubmit = () => {
    this.props.onUserLogout();
    this.props.history.push("/");
  };

  render() {
    const { user } = this.props.auth;
    let data;
    if (user) {
      data = (
        <React.Fragment>
          <div className="row">
            <div className="col-md-12">
              <p>
                <b>Username :</b> <b className="px-3">{this.state.username}</b>
              </p>
              <p className="d-flex">
                <b>Password :</b>
                <b className="px-3">
                  <Input
                    style={{
                      height: "auto",
                      paddingTop: 0,
                      paddingBottom: 0,
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#000",
                    }}
                    type="password"
                    name="password"
                    id="examplePassword"
                    value={this.state.password}
                    readOnly
                  />
                </b>
              </p>
              <div className="my-5">
                <Button color="primary" className="mr-5" onClick={this.shown}>
                  Change Password
                </Button>
                <Button color="primary" onClick={this.onLogoutSubmit}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }

    if (this.state.change) {
      data = (
        <React.Fragment>
          <p>
            <b>Username </b>: <b className="px-3">{user.username}</b>
          </p>
          <p>
            <FormGroup className="d-flex">
              <Label>
                <b>New Password :</b>
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="New Password"
                onChange={this.onChangePassword}
              />
            </FormGroup>
          </p>
          <div className="my-5">
            <Button
              color="primary"
              className="mr-5"
              onClick={this.onPasswordSubmit}
            >
              Save Password
            </Button>
            <Button color="primary" onClick={this.onLogoutSubmit}>
              Logout
            </Button>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <MenuBar />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Card className="px-3 pt-3">{data}</Card>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { onUserLogout, newPassword })(
  withRouter(User)
);
