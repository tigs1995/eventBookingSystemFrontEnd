import React, { Component } from 'react';
import axios from 'axios';

export default class Event extends Component{

  viewCusts = (event) => {
    event.preventDefault();
    window.location.pathname = './ViewCusts';
  }

  viewEvents = (event) => {
    event.preventDefault();
    window.location.pathname = './ViewEvents';
  }
  
  updateCust = (event) => {
    event.preventDefault();
    window.location.pathname = './UpdateCust';
  }

  updateEvent = (event) => {
    event.preventDefault();
    window.location.pathname = './UpdateEvent';
  }


  deleteCust = (event) => {
    event.preventDefault();
    window.location.pathname = './DeleteCust';
  }

  deleteEvent = (event) => {
    event.preventDefault();
    window.location.pathname = './DeleteEvent';
  }

  render(){
    return (
      <div>
        <h2>ADMIN VIEW</h2>
        <h3>Customers</h3>
        <h3>Events</h3>
        <button onClick={this.viewCusts}>View Customers</button>
        <br />
        <button onClick={this.viewEvents}>View Events</button>
        <br />
        <button onClick={this.deleteCust}>Delete Customer</button>
        <br />
        <button onClick={this.deleteEvent}>Delete Event</button>
        <br />
        <button onClick={this.updateCust}>Update Customer</button>
        <br />
        <button onClick={this.updateEvent}>Update Event</button>
      </div>
    )
    }
}