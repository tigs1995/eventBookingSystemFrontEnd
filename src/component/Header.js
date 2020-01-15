import React, { Component } from 'react';

export default class Header extends Component {


    homeClicked = (event) => {
        window.location.pathname = '.';
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