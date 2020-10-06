import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Task from "./components/Task/Task";
import User from "./components/User/User";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </React.Fragment>

        {isAuthenticated ? (
          <React.Fragment>
            <Route exact path="/home" component={Home} />
            <Route exact path="/task" component={Task} />
            <Route exact path="/user" component={User} />
            <Redirect to="/home" />
          </React.Fragment>
        ) : (
          <Redirect to="/" />
        )}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
