import React from 'react';
import { connect } from 'react-redux'
import { Form, Header } from 'semantic-ui-react'

import { setUser } from './store/actions'


class LoginPageComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/v1/login/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        'username': this.state.username,
        'password': this.state.password
      })
    });
    // TODO: check HTTP status
    this.props.setUser(this.state.username);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Header as='h1'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='Username'
            name='username'
            onChange={this.handleInputChange}
          />
          <Form.Input
            label='Password'
            name='password'
            type='password'
            onChange={this.handleInputChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
};

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUser(user))
  };
}

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);

export default LoginPage;
