import React, { Component } from 'react';
import Home from './Home.jsx';

import { Router } from '@reach/router';

class Main extends Component {
  componentDidMount() {
    const { user } = this.props;
    localStorage.setItem('user', JSON.stringify(user));
  }
  render() {
    const { user } = this.props;

    return (
      <Router>
        <Home path="/home" username={user.username} />
      </Router>
    );
  }
}

export default Main;
