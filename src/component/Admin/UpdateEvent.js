import React, { Component } from 'react';
import { BASE_URL, POST_GET_CUST_URL} from '../Constants';
import axios from 'axios';

export default class EditEvent extends Component{

    // showCustomers() {
    //     axios.get(`${BASE_URL}${POST_GET_CUST_URL }`).then(data => {
    //         for (let customer of data) {
    //             const listElement = document.createElement("li");
    //             listElement.value = data.email;
    //             listElement.innerHTML = customer.firstName + " " + customer.lastName + " " + customer.email + " " + customer.phone;
    //             document.getElementsByClassName("listGroup").appendChild(listElement);
    //         }
    //     });
    // }

    // componentDidMount(props) {
    //     this.showCustomers();
    //   }

    render(){
        return (
          <div>
            <h2>ADMIN VIEW</h2> 
            <ul name="listGroup">
                <h2>Customers</h2>
            </ul>
          </div>
        )
        }
}