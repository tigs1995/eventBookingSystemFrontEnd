import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, POST_EVENT_URL } from './Constants';


export default class Event extends Component{

  constructor(props){
    super(props);
    this.state = {
      custid: null,
      eventPostcode: null,
      eventCapacity: null,
      eventDate: null,
      todayDate: null,
      maxDate: null,
      err: '',
      errors: {
        errorPostcode: '',
        errorCapacity: '',
        errorDate: '',
      },
    }
  }

  validate = (event) => {
    event.preventDefault();
    var validPostcodeRegex = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? ?[0-9][AaBbD-Hd-hJjLlNnP-Up-uW-Zw-z]{2}$/;
    const { name, value } = event.target;
    let errors = this.state.errors;

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
    this.setState({ eventPostcode: this.postcodeInp.value});
    this.setState({ eventCapacity: this.capacityInp.value});
    this.setState({ eventDate: this.dateInp.value});
    axios.post(`${BASE_URL}${POST_EVENT_URL}${this.state.custid}`, { eventPostcode: this.state.eventPostcode, eventCapacity: this.state.eventCapacity, eventDate: this.state.eventDate })
    .then(response => {console.log(response)})
    .catch(error => {
      console.warn(error);
      this.setState({ err: error.message })
    })
    this.props.history.push('ThankYou/');
  }

  componentDidMount(props) {
    this.setState({custid: this.props.match.params.custid});
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


  render(){
    const {errors} = this.state;
    const disabled = errors.errorPostcode || errors.errorCapacity;
    return (
      <div>
        <p>Customer Reference: {this.state.custid}</p>
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
          <br />
          <button disabled={disabled ? 'disabled' : ''}>Submit</button>
        </form>
      </div>
    );
    }
}