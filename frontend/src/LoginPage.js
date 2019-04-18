import React from 'react';
import { Form } from 'semantic-ui-react'


class LoginPage extends React.Component {
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
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
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

export default LoginPage;
