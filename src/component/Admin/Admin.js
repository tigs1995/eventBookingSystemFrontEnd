import React, { Component } from 'react';

export default class Event extends Component{

  viewCusts = (event) => {
    event.preventDefault();
    this.props.history.push('./ViewCusts');
  }

  viewEvents = (event) => {
    event.preventDefault();
    this.props.history.push('./ViewEvents');
  }
  
  updateCust = (event) => {
    event.preventDefault();
    this.props.history.push('./UpdateCust');
  }

  updateEvent = (event) => {
    event.preventDefault();
    this.props.history.push('./UpdateEvent');
  }


  deleteCust = (event) => {
    event.preventDefault();
    this.props.history.push('./DeleteCust');
  }

  deleteEvent = (event) => {
    event.preventDefault();
    this.props.history.push('./DeleteEvent');
  }

  render(){
    return (
      <div>
        <h3 className="admin">ADMIN VIEW</h3>
        <br/>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Customers</h3>
              </th>
              <th>
                <h3>Events</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button onClick={this.viewCusts}>View Customers</button></td>
              <td><button onClick={this.viewEvents}>View Events</button></td>
            </tr>
            <tr>
              <td><button onClick={this.deleteCust}>Delete Customer</button></td>
              <td><button onClick={this.deleteEvent}>Delete Event</button></td>
            </tr>
            <tr>
              <td><button onClick={this.updateCust}>Update Customer</button></td>
              <td><button onClick={this.updateEvent}>Update Event</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
    }
}