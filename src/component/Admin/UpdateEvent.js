import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, CHECK_EXISTING_EVENT_URL } from '../Constants';

class UpdateEvent extends Component{
  
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
    
    if (eventRef === ""){
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
      else if (response.data === false) {
        this.setState({ errorMessage: "Event ID not found." });
      } 
      else {
        this.props.history.push(`UpdateEventID/${this.state.eventReference}`);
    }}).catch(err => {
      console.error(err);
      this.setState({ errorMessage: err});
    })
    }

    backClicked = (event) => {
      event.preventDefault();
      this.props.history.push('./AdminHome');
    }

  render(){
    return (
      <div>
        <h3 className="admin">ADMIN VIEW</h3>
        <br/>
      <form>
        <input type="long" placeholder="Event Ref Number" name="event-ref" onChange={this.validation} required></input>
        <br />
        <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Submit</button>
        <span className='error'>{this.state.errorMessage}</span> 
        <button onClick={this.backClicked}>Admin Home</button>
      </form>
      </div>
    );
  }
}

export default (UpdateEvent);
