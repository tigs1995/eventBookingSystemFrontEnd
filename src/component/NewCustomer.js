import React, { Component } from 'react';
import { render } from '@testing-library/react';

export default class NewCustomer extends Component{
  constructor(props){
  super(props);
  this.state = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    errors: {
      errorFirstName: ' ',
      errorLastName: ' ',
      errorEmail: ' ',
      errorPhone: ' ',
      errorSubmit: ' '
    },
  }
}

  validate = (event) => {
    event.preventDefault();
    var validEmailRegex = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$');
    var validPhoneRegex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch(name){
      case 'first-name':
        errors.errorFirstName = value.length < 6 ? '' : 'First name too long.';
        break;
      case 'second-name':
        errors.errorLastName = value.length < 6  ? '' : 'Last name too long.';
        break;
      case 'email':
        errors.errorEmail = validEmailRegex.test(value) ? '' : 'Email invalid.';
        break;
      case 'phone':
        errors.errorPhone = validPhoneRegex.test(value) ? '' : 'Phone invalid.';
        break;
        default:
          break;
    }

    this.setState({errors, [name]: value}, ()=> { 
    })
    }

  onSubmitClick = (event) => {
    event.preventDefault();
    window.location.pathname = './Event';
  }


  render(){
    const {errors} = this.state;
    const disabled = errors.errorFirstName || errors.errorLastName || errors.errorEmail || errors.errorPhone;
    return (
      <div>
        <form onSubmit={this.onSubmitClick}>
          <input type="text" placeholder="First Name" name="first-name" onChange={this.validate} required></input>
          <span className='error'>{errors.errorFirstName}</span>        
          <br />
          <input type="text" placeholder="Second Name" name="second-name" onChange={this.validate} required></input>
          <span className='error'>{errors.errorLastName}</span>          
          <br />
          <input type="text" placeholder="Email" name="email" onChange={this.validate} required></input>
          <span className='error'>{errors.errorEmail}</span> 
          <br />
          <input type="text" placeholder="Phone" name="phone" onChange={this.validate} required></input>
          <span className='error'>{errors.errorPhone}</span> 
          <br />
          <button disabled={disabled ? 'disabled' : ''}>Submit</button>
        </form>
      </div>
    );
  }
}

