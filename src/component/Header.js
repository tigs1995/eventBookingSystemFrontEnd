import React, { Component } from 'react';

export default class Header extends Component {


    homeClicked = (event) => {
        window.location.replace('http://35.176.230.34:8181/eventBookingSystem/');
    }
    render(){
        return (
            <div>
                <button className='homebutton' onClick={this.homeClicked} >Home</button>
                <h1>BOOK AN EVENT</h1>
            </div>
        );
    }
}