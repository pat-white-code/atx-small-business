import React, { Component } from 'react';
import AddForm from '../AddForm';

class Add extends Component {
  state = { 
    name: '',
    address: '',
    hours: '',
    description: '',
    mapUrl: '&q=Austin,+TX',
    tempId: this.props.businesses.length + 1
  }
  onFormChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  clearState = () => {
    this.setState({
      name: '',
      address: '',
      hours: '',
      description: '',
      mapUrl: '&q=Austin,+TX',
      tempId: this.props.businesses.length + 1
    })
  }

  formUrl = e => {
    let string = e.target.value;
    let url = '&q=' + string.replace(/ /g, '+')
    console.log(url);
    this.setState({mapUrl: url})
  }

  render() { 
    return ( 
      <AddForm 
        onFormChange={this.onFormChange}
        addBusiness={this.props.addBusiness}
        addUserBusiness={this.props.addUserBusiness}
        parentState={this.state}
        handleClose={this.props.handleClose}
        userId={this.props.userId}
        formUrl={this.formUrl}
        mapUrl={this.state.mapUrl}
        clearState={this.clearState}
        />
    );
  }
}

export default Add;
