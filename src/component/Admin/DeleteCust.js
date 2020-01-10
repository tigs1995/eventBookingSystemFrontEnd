import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, CHECK_EXISTING_URL, DELETE_URL } from '../Constants';


export default class DeleteCustomer extends Component{

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
    axios.get(`${BASE_URL}${CHECK_EXISTING_URL}${this.state.custReference}`).then(response => {
      if (response.data.Error) {
        this.setState({ errorMessage: response.dataError });
      }
      else if (response.data == false) {
        this.setState({ errorMessage: "Customer ID not found." });
      } 
      else {
        axios.delete(`${BASE_URL}${DELETE_URL}${this.state.custReference}`).then(response => {
            console.log(response)})
        .catch(error => {
        console.warn(error);
        this.setState({ errorMessage: error.message })
        })
    }
})
  }

  render(){
    return (
      <div>
        <h2>ADMIN VIEW</h2>
        <input type="long" placeholder="Enter customer number to delete." name="custToDelete" onChange={this.validation} required></input>
        <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Submit</button>
        {this.state.errorMessage}
        <br />
      </div>
    )
    }
}