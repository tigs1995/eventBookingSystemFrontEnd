import React, { Component } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import UpdateCustID from './UpdateCustID';
import { BASE_URL, CHECK_EXISTING_CUST_URL } from '../Constants';

class UpdateCust extends Component{
  
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
      err = <small>Your customer reference must be a number greater than 0.</small>
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
        this.props.history.push(`UpdateCustID/${this.state.custReference}`);
    }}).catch(err => {
      console.error(err);
      this.setState({ errorMessage: err});
    })
    }

  onBackClick = (event) => {
    event.preventDefault();
    window.location.pathname = './Admin';
  }

  render(){
    return (
      <div>
      <form>
        <input type="long" placeholder="Customer Ref Number" name="cust-ref" onChange={this.validation} required></input>
        <br />
        <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Submit</button>
        {this.state.errorMessage}
        <br />
        <button onClick={this.onBackClick}>Back</button>
      </form>
      </div>
    );
  }
}

export default (UpdateCust);
