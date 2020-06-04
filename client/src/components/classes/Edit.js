import React, { Component } from 'react';
import EditForm from '../EditForm';

class Edit extends Component {
  business = this.props.userBusinesses.filter(business => business.id === parseInt(this.props.id))[0];
  state = {
    name: this.business.name,
    address: this.business.address,
    description: this.business.description,
    hours: this.business.hours,
    id: this.business.id
  }
  // state = {name, address, description, hours, id}
  // state = { 
  //   name: this.props.name,
  //   address: this.props.address,
  //   description: this.props.description,
  //   hours: this.props.hours,
  //   id: this.props.id
  // }

  onFormChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() { 
    return (
      <EditForm
        editUserBusiness={this.props.editUserBusiness}
        onFormChange={this.onFormChange}
        handleClose={this.props.handleClose}
        parentState={this.state} />
    );
  }
}

export default Edit;