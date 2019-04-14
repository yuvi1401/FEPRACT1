import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: ''
  };
  render() {
    //const { user } = this.props;
    const { username } = this.state;
    const { user, children } = this.props;
    if (user.username) return children;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Please Login to your account</h2>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleChange}
            required
          />
          <button id="button" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
  handleSubmit = event => {
    const { username } = this.state;
    const { login } = this.props;
    login(username);
  };
  handleChange = ({ target }) => {
    console.log(target);
    this.setState({ username: target.value });
  };
}

export default Login;
