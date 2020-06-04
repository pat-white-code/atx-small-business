import React, { Component } from 'react';
import LoginForm from '../Login';

class Login extends Component {
  state = { 
    username: '',
    password: ''
  }
  handleFieldChange = e => {
    console.log('STATE', this.state)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() { 
    return (
    <LoginForm 
      handleFieldChange={this.handleFieldChange}
      userLogin={this.props.userLogin}
      parentState={this.state}
      /> 
  );
  }
}

export default Login;