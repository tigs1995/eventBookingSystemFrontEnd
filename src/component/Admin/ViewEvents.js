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
        this.props.history.push('./Admin');
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
                                        Date
                                    </th>
                                    <th>
                                        EventId
                                    </th>
                                    <th>
                                        Event Capacity
                                    </th>
                                    <th>
                                        Event Postcode
                                    </th>
                                    <th>
                                        Event Customer
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
                <button className="backbutton" onClick={this.backClicked}>Admin Home</button>
            </div>
        );
    }
}