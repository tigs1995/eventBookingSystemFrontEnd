import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, PUT_DELETE_EVENT_URL} from '../Constants';

export default class UpdateEventID extends Component{

  constructor(props){
    super(props);
    this.state = {
      eventid: null,
      eventPostcode: null,
      eventCapacity: null,
      eventDate: null,
      errors: {
        errorPostcode: '',
        errorCapacity: '',
        errorDate: '',
        err: '',
      },
    }
  }

  componentDidMount(props) {
    this.setState({eventid: this.props.match.params.eventid})
  }

  validate = (event) => {
    event.preventDefault();
    var validPostcodeRegex = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][AaBbD-Hd-hJjLlNnP-Up-uW-Zw-z]{2}$/;
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch(name){
      case 'eventPostcode':
        errors.errorPostcode = validPostcodeRegex.test(value) || value == "" ? '' : 'Postcode invalid.';
        break;
      case 'eventCapacity':
        errors.errorCapacity = Number(value) && value > 1 && value < 5001 || value == "" ? '' : 'Invalid format. Numbers only. Max capacity of 5,000.';
        break;
        default:
          break;
    }

    this.setState({errors, [name]: value}, ()=> { 
    })
    }

  onSubmitClick = (event) => {
    event.preventDefault();
    this.setState({ postcode: this.postcodeInp.value});
    this.setState({ capacity: this.capacityInp.value});
    this.setState({ date: this.dateInp.value});
    axios.put(`${BASE_URL}${PUT_DELETE_EVENT_URL}${this.state.eventid}`, { eventPostcode: this.state.eventPostcode, eventCapacity: this.state.eventCapacity, eventDate: this.state.eventDate })
    .then(response => {console.log(response)})
    .catch(error => {
      console.warn(error);
      this.setState({ err: error.message })
    })
    alert("Event updated successfully.");
    window.location.pathname = './Admin';  
}

onBackClick = (event) => {
    event.preventDefault();
    window.location.pathname = './UpdateCust';
  }

  render(){
    const {errors} = this.state;
    const disabled = errors.errorPostcode || errors.errorCapacity;
    return (
      <div>
        <p>Event Reference: {this.state.eventid}</p>
        <form onSubmit={this.onSubmitClick}>
          <input type="date" placeholder="Date" name="eventDate" value="2020-02-10" onChange={this.validate} ref={input => this.dateInp = input} required></input>
          <br />
          <input type="text" placeholder="Postcode" name="eventPostcode" onChange={this.validate} ref={input => this.postcodeInp = input} required></input>
          <span className='error'>{errors.errorPostcode}</span>
          <br />
          <input type="text" placeholder="Capacity" name="eventCapacity" onChange={this.validate} ref={input => this.capacityInp = input} required></input>
          <span className='error'>{errors.errorCapacity}</span>
          <br />
          <p>If your event is more than one day, please select a day for your event that is available.</p>
          <button disabled={disabled ? 'disabled' : ''}>Submit</button>
        <br />
        <button onClick={this.onBackClick}>Back</button>    
        </form>
      </div>
    )
    }
}