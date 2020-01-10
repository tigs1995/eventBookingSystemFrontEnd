import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, CHECK_EXISTING_URL, DELETE_EVENT_URL } from '../Constants';


export default class DeleteCustomer extends Component{

    constructor(props){
        super(props);
        this.state = {
          eventReference: 0,
          errorMessage: '',
          disabled: true
      }
      }

  validation = (event) => {
    let eventRef = event.target.value;
    let err = '';
    event.preventDefault();
    this.setState({eventReference: 0});
    
    if (eventRef == ""){
      err = '';
      this.setState({disabled: true});
    }
    else if (!Number(eventRef)){
      err = <small>Your event reference must be a number greater than 0.</small>
      this.setState({disabled: true});
    }
    else {
      this.setState({eventReference: eventRef});
      this.setState({disabled: false});
    }
    this.setState({errorMessage: err});
  }

  onSubmitClick = (event) => {
    event.preventDefault();
    axios.get(`${BASE_URL}${CHECK_EXISTING_URL}${this.state.eventReference}`).then(response => {
      if (response.data.Error) {
        this.setState({ errorMessage: response.dataError });
      }
      else if (response.data == false) {
        this.setState({ errorMessage: "Event ID not found." });
      } 
      else {
        axios.delete(`${BASE_URL}${DELETE_EVENT_URL}${this.state.eventReference}`).then(response => {
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
        <input type="long" placeholder="Enter event number to delete." name="eventToDelete" onChange={this.validation} required></input>
        <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Delete Event</button>
        {this.state.errorMessage}
        <br />
      </div>
    )
    }
}