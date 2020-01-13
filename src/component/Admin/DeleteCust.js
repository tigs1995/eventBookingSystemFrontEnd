import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, CHECK_EXISTING_CUST_URL, PUT_DELETE_CUST_URL } from '../Constants';


export default class DeleteCustomer extends Component{

    constructor(props){
        super(props);
        this.state = {
          custReference: 0,
          errorMessage: '',
          completeMessage: '',
          disabled: true
      }
      }

  validation = (event) => {
    let custRef = event.target.value;
    let err = '';
    event.preventDefault();
    this.setState({custReference: 0});
    this.setState({completeMessage: ''})
    
    if (custRef === ""){
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
      else if (response.data === false) {
        this.setState({ errorMessage: "Customer ID not found." });
      } 
      else {
        axios.delete(`${BASE_URL}${PUT_DELETE_CUST_URL}${this.state.custReference}`).then(response => {
            console.log(response)})
        .catch(error => {
        console.warn(error);
        this.setState({ errorMessage: error.message })
        })
        this.setState({completeMessage: "Customer number " + (this.state.custReference) + " was deleted, along with their events."})
    }
})
  }

  onBackClick = (event) => {
    event.preventDefault();
    window.location.pathname = './Admin';
  }

  render(){
    return (
      <div>
        <h3 className="admin">ADMIN VIEW</h3>
        <br/>
        <form>
        <input type="long" placeholder="Customer number to delete" name="custToDelete" onChange={this.validation} required></input>
        <br/>
        <span className='error'>{this.state.errorMessage}</span> 
        <br/>
        <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Delete Customer</button>
        <br />
        <button onClick={this.onBackClick}>Admin Home</button>
        <span className='completemessage'>{this.state.completeMessage}</span>
        </form>
      </div>
    )
    }
}