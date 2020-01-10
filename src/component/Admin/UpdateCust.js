import React, { Component } from 'react';

export default class EditCustomer extends Component{

  deleteCustomer = (event) => {
    event.preventDefault();
    window.location.pathname = './DeleteCustomer';
    }

    render(){
        return (
          <div>
            <h2>ADMIN VIEW</h2>
            <button onClick={this.deleteCustomer}>Delete Customer</button>
            <br />
            <button onClick={this.updateCustomer}>Update Customer</button>
          </div>
        )
        }
}