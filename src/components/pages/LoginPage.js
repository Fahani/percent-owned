import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class LoginPage extends React.Component {
  submit = data =>
    this.props
      .login(data)
      .then(() =>
        this.props.history.push("/")
      ); /* Dispatch a thunk action with this data. Return a promise. If everything is fine, it redirects to home.
      To redirect to home we use history. History is passed by Router Component.
      Login will be available to us when we connect this component to redux
     */

  render() {
    return (
      <div>
        <h1>Login Page</h1>

        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { login })(LoginPage);
