import React, { Component } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import Event from '../Event';

export default class AdminPassword extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      password: "toastclub1995",
      errorMessage: ''
  }
  }

  onSubmitClick = (event) => {
    event.preventDefault();
    if (this.passwordInp.value == this.state.password){
        window.location.pathname = './Admin';
    }
    else{
        this.setState({errorMessage: "Password incorrect."});
    }
    }

  onBackClick = (event) => {
    event.preventDefault();
    window.location.pathname = './';
  }

  render(){
    return (
      <div>
      <form>
        <input type="password" placeholder="Password" name="password" ref={input => this.passwordInp = input} required></input>
        <br />
        <span className='error'>{this.state.errorMessage}</span>        
        <br />
        <button onClick={this.onSubmitClick}>Submit</button>
        <br />
        <button onClick={this.onBackClick}>Back</button>
      </form>
      </div>
    );
  }
}


