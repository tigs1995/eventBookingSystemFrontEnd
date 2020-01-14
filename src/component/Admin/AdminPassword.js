import React, { Component } from 'react';
import { PASSWORD } from '../Constants';

export default class AdminPassword extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      password: {PASSWORD},
      errorMessage: ''
  }
  }

  onSubmitClick = (event) => {
    event.preventDefault();
    if (this.passwordInp.value === PASSWORD) {
      this.props.history.push('./AdminHome');
    }
    else{
        this.setState({errorMessage: "Password incorrect."});
    }
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
        </form>
      </div>
    );
  }
}


