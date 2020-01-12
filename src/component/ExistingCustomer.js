import React, { Component } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import Event from './Event';
import { BASE_URL, CHECK_EXISTING_CUST_URL } from './Constants';

class ExistingCustomer extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      custReference: 0,
      errorMessage: '',
      disabled: true
  }
  }

  validation = (event) => {
    let custRef = event.target.value;
    let err = '';
    event.preventDefault();
    this.setState({custReference: 0});
    
    if (custRef == ""){
      err = '';
      this.setState({disabled: true});
    }
    else if (!Number(custRef)){
      err = "Your customer reference must be a number greater than 0.";
      this.setState({disabled: true});
    }
    else {
      this.setState({custReference: custRef});
      this.setState({disabled: false});
    }
    this.setState({errorMessage: err});
  }

  onSubmitClick = (event) => {
    event.preventDefault();
    axios.get(`${BASE_URL}${CHECK_EXISTING_CUST_URL}${this.state.custReference}`).then(response => {
      if (response.data.Error) {
        this.setState({ errorMessage: response.dataError });
      }
      else if (response.data == false) {
        this.setState({ errorMessage: "Customer ID not found." });
      } 
      else {
        this.props.history.push(`Event/${this.state.custReference}`);
    }}).catch(err => {
      console.error(err);
      this.setState({ errorMessage: err});
    })
    }

  render(){
    return (
      <div>
      <form>
        <input type="long" placeholder="Customer Ref Number" name="cust-ref" onChange={this.validation} required></input>
        <br />
        <span className='error'>{this.state.errorMessage}</span> 
        <br />
        <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Submit</button>
      </form>
      </div>
    );
  }
}

export default (ExistingCustomer);

