import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, GET_EVENT_URL } from '../Constants';

export default class ViewEvents extends Component{

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }
  componentDidMount(){
        axios.get(`${BASE_URL}${GET_EVENT_URL }`).then(response => {
          console.log(response);
          this.setState({ events: response.data });
        })
        .catch(error => console.warn(error));
      }

      backClicked(){
          window.location.pathname = './Admin';
      }

      render() {
        return (
          <div>
            <h3 className="admin">ADMIN VIEW</h3>
            <br/>
            <h3>Events</h3>
            <div className='scrollbox'>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <a>Date</a>
                                    </th>
                                    <th>
                                        <a>EventId</a>
                                    </th>
                                    <th>
                                        <a>Event Capacity</a>
                                    </th>
                                    <th>
                                        <a>Event Postcode</a>
                                    </th>
                                    <th>
                                        <a>Event Customer</a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.events.map(event => (
                                <tr>
                                    <td>{event.eventDate}</td>
                                    <td>{event.eventId}</td>
                                    <td>{event.eventCapacity}</td>
                                    <td>{event.eventPostcode}</td>
                                    <td>{event.customer.customerId}</td>
                                </tr>))}
                            </tbody>
                        </table>
                </div>
                <button className="backbutton" onClick={this.backClicked}>Back</button>
            </div>
        );
    }
}