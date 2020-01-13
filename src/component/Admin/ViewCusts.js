import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, POST_GET_CUST_URL } from '../Constants';

export default class ViewCusts extends Component{

  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    }
  }
  componentDidMount(){
        axios.get(`${BASE_URL}${POST_GET_CUST_URL }`).then(response => {
          console.log(response);
          this.setState({ customers: response.data });
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
            <h3>Customers</h3>
            <div className='scrollbox'>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Customer ID
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Second Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Phone
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.customers.map(customer => (
                                <tr>
                                    <td>{customer.customerId}</td>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                </tr>))}
                            </tbody>
                        </table>
                </div>
                <button className="backbutton" onClick={this.backClicked}>Admin Home</button>
            </div>
        );
    }
}