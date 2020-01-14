import React, { Component } from 'react';

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
    if (this.passwordInp.value === this.state.password){
      this.props.history.push('./Admin');
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


