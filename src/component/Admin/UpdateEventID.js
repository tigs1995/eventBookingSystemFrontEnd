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
      todayDate: null,
      maxDate: null,
      completeMessage: '', 
      err: '',
      errors: {
        errorPostcode: '',
        errorCapacity: '',
        errorDate: '',
        err: '',
      },
    }
  }

  componentDidMount(props) {
    this.setState({eventid: this.props.match.params.eventid});
    var todaysDate = new Date();
    var day = todaysDate.getDate();
    var month = todaysDate.getMonth() + 1;
    var year = todaysDate.getFullYear();

    if (month < 10){
      month = `0` + month;
    }
    if (day < 10) {
      day = `0` + day;
    }
    this.setState({ todayDate: year + `-` + month + `-` + day });
    this.setState({ maxDate: (year + 5) + `-` + month + `-` + day })
  }

  validate = (event) => {
    event.preventDefault();
    var validPostcodeRegex = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? ?[0-9][AaBbD-Hd-hJjLlNnP-Up-uW-Zw-z]{2}$/;
    const { name, value } = event.target;
    let errors = this.state.errors;
    this.setState({completeMessage: ''})

    switch(name){
      case 'eventPostcode':
        errors.errorPostcode = validPostcodeRegex.test(value) || value === "" ? '' : 'Postcode invalid.';
        break;
      case 'eventCapacity':
        errors.errorCapacity = Number(value) && value > 1 && value < 5001 ? '' : 'Invalid format. Numbers only. Max capacity of 5,000.';
        break;
      case 'eventDate':
        this.setState({ todayDate: value });
        break;
        default:
          break;
    }

    this.setState({errors, [name]: value}, ()=> { 
    })
    }

  onSubmitClick = (event) => {
    event.preventDefault();
    this.setState({ eventPpostcode: this.postcodeInp.value});
    this.setState({ eventCapacity: this.capacityInp.value});
    this.setState({ eventDate: this.dateInp.value});
    axios.put(`${BASE_URL}${PUT_DELETE_EVENT_URL}${this.state.eventid}`, { eventPostcode: this.state.eventPostcode, eventCapacity: this.state.eventCapacity, eventDate: this.state.eventDate })
    .then(response => {console.log(response)})
    .catch(error => {
      console.warn(error);
      this.setState({ err: error.message })
    })
    this.setState({completeMessage: "Event number " + (this.state.eventid) + " was updated."})
  
}

onBackClick = (event) => {
    event.preventDefault();
    this.props.history.push('./Admin');
  }

  render(){
    const {errors} = this.state;
    const disabled = errors.errorPostcode || errors.errorCapacity;
    return (
      <div>
        <p>Event Reference: {this.state.eventid}</p>
        <form onSubmit={this.onSubmitClick}>
        <input type="text" placeholder="Postcode" name="eventPostcode" onChange={this.validate} ref={input => this.postcodeInp = input} required></input>
          <span className='error'>{errors.errorPostcode}</span>
          <br />
          <input type="text" placeholder="Capacity" name="eventCapacity" onChange={this.validate} ref={input => this.capacityInp = input} required></input>
          <span className='error'>{errors.errorCapacity}</span>
          <br/>
          <small>If your event is more than one day, please select a day for your event that is available.</small>
          <br />
          <input type="date" placeholder="Date" name="eventDate" value={this.state.todayDate} min={this.state.todayDate} max={this.state.maxDate} onChange={this.validate} ref={input => this.dateInp = input} required></input>
          <span></span>
          <br />
          <button disabled={disabled ? 'disabled' : ''}>Submit</button>
        <br />
        <button onClick={this.onBackClick}>Admin Home</button>    
        <span className='completemessage'>{this.state.completeMessage}</span>
        </form>
      </div>
    )
    }
}