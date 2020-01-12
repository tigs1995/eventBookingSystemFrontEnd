import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, CHECK_EXISTING_EVENT_URL, PUT_DELETE_EVENT_URL } from '../Constants';


export default class DeleteEvent extends Component{

    constructor(props){
        super(props);
        this.state = {
          eventReference: 0,
          errorMessage: '',
          completeMessage: '', 
          disabled: true
      }
      }

  validation = (event) => {
    let eventRef = event.target.value;
    let err = '';
    event.preventDefault();
    this.setState({eventReference: 0});
    this.setState({completeMessage: ''})
    
    if (eventRef == ""){
      err = '';
      this.setState({disabled: true});
    }
    else if (!Number(eventRef)){
      err = "Your event reference must be a number greater than 0.";
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
    axios.get(`${BASE_URL}${CHECK_EXISTING_EVENT_URL}${this.state.eventReference}`).then(response => {
      if (response.data.Error) {
        this.setState({ errorMessage: response.dataError });
      }
      else if (response.data == false) {
        this.setState({ errorMessage: "Event ID not found." });
      } 
      else {
        axios.delete(`${BASE_URL}${PUT_DELETE_EVENT_URL}${this.state.eventReference}`).then(response => {
            console.log(response)})
        .catch(error => {
        console.warn(error);
        this.setState({ errorMessage: error.message })
        })
        this.setState({completeMessage: "Event number " + (this.state.eventReference) + " was deleted."})
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
        <input type="long" placeholder="Enter event number to delete." name="eventToDelete" onChange={this.validation} required></input>
        <br />
        <span className='error'>{this.state.errorMessage}</span> 
        <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Delete Event</button>
        <br />
        <button onClick={this.onBackClick}>Admin Home</button>
        <span className='completemessage'>{this.state.completeMessage}</span>
        </form>
      </div>
    )
    }
}