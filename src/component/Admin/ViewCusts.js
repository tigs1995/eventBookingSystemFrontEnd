import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, POST_GET_CUST_URL } from '../Constants';
import { Card } from 'react-bootstrap';

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

      render() {
        return (
          <div><h2>ADMIN VIEW</h2>
          <h3>Customers</h3>
            <div className='scrollbox'>
                {this.state.customers.map(customer => (
                    <div>
                        <Card className='customerdetails'>
                            <Card.Body>
                                <Card.Text>
                                    {customer.customerId}
                                    <br />
                                    Name: {customer.firstName} {customer.lastName}
                                    <br />
                                    Email: {customer.email}
                                    <br />                                
                                    Phone: {customer.phone}
                                    <br />
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>)
                )}
            </div>
            </div>
        );
    }
}


 