import React, { Component } from 'react';

import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import './App.css';
import * as api from './api';
import { navigate } from '@reach/router';

class App extends Component {
  state = {
    user: {},
    //isLoading: true,
    hasError: false
  };
  render() {
    const { user } = this.state;
    //if (isLoading) return <h3>Loading...</h3>;
    return (
      <div className="App">
        <h1>Welcome Home</h1>
        <Login login={this.setuser} user={user}>
          <Main user={user} logOut={this.logOut} />
        </Login>
      </div>
    );
  }

  componentDidUpdate(prevState) {
    if (prevState.user !== this.state.user) {
      localStorage.setItem('user', JSON.stringify(this.state.user));
    }
  }
  setuser = username => {
    api
      .getUser(username)
      .then(username => {
        console.log(username);
        this.setState({ user: username });
      })
      .catch(err => this.setState({ hasError: true }));
  };
  logOut = () => {
    navigate('/');
    this.setState({ user: {} });
    localStorage.clear();
  };
  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user && !user.username) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) });
    }
  }
}

export default App;
