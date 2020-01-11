import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, POST_GET_CUST_URL } from './Constants';


export default class NewCustomer extends Component{

  constructor(props){
  super(props);
  this.state = {
    custid: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    err: '',
    errors: {
      errorFirstName: ' ',
      errorLastName: ' ',
      errorEmail: ' ',
      errorPhone: ' ',
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
      case 'firstName':
        errors.errorFirstName = value.length < 40 ? '' : 'First name too long.';
        break;
      case 'lastName':
        errors.errorLastName = value.length < 40  ? '' : 'Last name too long.';
        break;
      case 'email':
        errors.errorEmail = validEmailRegex.test(value) || value == "" ? '' : 'Email invalid.';
        break;
      case 'phone':
        errors.errorPhone = validPhoneRegex.test(value) || value == "" ? '' : 'Phone invalid.';
        break;
        default:
          break;
    }

    this.setState({errors, [name]: value}, ()=> { 
    })
    }

    onSubmitClick = (event) => {
      event.preventDefault();
      this.setState({ firstName: this.firstNameInp.value});
      this.setState({ lastName: this.lastNameInp.value});
      this.setState({ email: this.emailInp.value});
      this.setState({ phone: this.phoneInp.value});
      axios.post(`${BASE_URL}${POST_GET_CUST_URL}`, { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, phone: this.state.phone })
      .then(response => { 
              this.props.history.push(`Event/${response.data}`);  
      })
      .catch(error => {
        console.log(error);
        this.setState({ err: error.message })
      })
    }

  render(){
    const {errors} = this.state;
    const disabled = errors.errorFirstName || errors.errorLastName || errors.errorEmail || errors.errorPhone;
    return (
      <div>
        <form onSubmit={this.onSubmitClick}>
          <input type="text" placeholder="First Name" name="firstName" onChange={this.validate} ref={input => this.firstNameInp = input} required></input>
          <span className='error'>{errors.errorFirstName}</span>        
          <br />
          <input type="text" placeholder="Second Name" name="lastName" onChange={this.validate} ref={input => this.lastNameInp = input} required></input>
          <span className='error'>{errors.errorLastName}</span>          
          <br />
          <input type="text" placeholder="Email" name="email" onChange={this.validate} ref={input => this.emailInp = input} required></input>
          <span className='error'>{errors.errorEmail}</span> 
          <br />
          <input type="text" placeholder="Phone" name="phone" onChange={this.validate} ref={input => this.phoneInp = input} required></input>
          <span className='error'>{errors.errorPhone}</span> 
          <br />
          <button disabled={disabled ? 'disabled' : ''}>Submit</button>
        </form>
      </div>
    )
  }
}

