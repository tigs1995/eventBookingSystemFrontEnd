import React, { Component } from 'react';
import { render } from '@testing-library/react';

class NewCustomer extends Component{
  constructor(props){
  super(props);
  this.state = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    errors: {
      errorFirstName: '',
      errorLastName: '',
      errorEmail: '',
      errorPhone: '',
    },
    disabled: true
  }
}

  validate = (event) => {
    event.preventDefault();
    var validEmailRegex = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch(name){
      case 'first-name':
        errors.errorFirstName = value.length > 6 ? 'First name too long.' : '';
        break;
      case 'second-name':
        errors.errorLastName = value.length > 6 ? 'Last name too long.' : '';
        break;
      case 'email':
        errors.errorEmail = validEmailRegex.test(value) ? '' : 'Email invalid.';
        break;
        default:
          break;
    }
    this.setState({errors, [name]: value}, ()=> { 
      console.log(errors)
    })
  }

  onSubmitClick = (event) => {
    event.preventDefault();
    window.location.pathname = './ExistingCustomer';
  }

  render(){
    const {errors} = this.state;
    return (
      <div>
        <form>
          <input type="text" placeholder="First Name" name="first-name" onChange={this.validate} required></input>
          <span className='error'>{errors.errorFirstName}</span>        
          <br />
          <input type="text" placeholder="Second Name" name="second-name" onChange={this.validate} required></input>
          <span className='error'>{errors.errorLastName}</span>          
          <br />
          <input type="text" placeholder="Email" name="email" onChange={this.validateEmail} required></input>
          <span className='error'>{errors.errorEmail}</span> 
          <br />
          <input type="text" placeholder="Phone" name="phone" onChange={this.validatePhone} required></input>
          <br />
          <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Submit</button>
        </form>
      </div>
    );
  }
}
export default (NewCustomer);

