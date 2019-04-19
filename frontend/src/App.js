import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'

import HomePage from './HomePage'
import SubmitPage from './SubmitPage'
import JobsPage from './JobsPage'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import SignupPage from './SignupPage'

import MenuComponent from './components/MenuComponent'

import { setUser } from './store/actions'

// https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const username = getCookie('username');
    if (username) {
      this.props.setUser(username);
    }
  }

  render() {
    const is_authed = Boolean(this.props.username);

    return (
      <Router>
        <MenuComponent is_authed={is_authed} />
        <Container text style={{ marginTop: '7em' }}>
          <Route exact path="/" component={HomePage} />
          <Route path="/jobs" component={JobsPage} />
          <Route path="/submit" component={SubmitPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/signup" component={SignupPage} />
        </Container>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUser(user))
  };
}

function mapStateToProps(state) {
  return { username: state.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
