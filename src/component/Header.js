import React, { Component } from 'react';

export default class Header extends Component {

    homeClicked = (event) => {
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <button className='homebutton' onClick={this.homeClicked} href="/">Home</button>
                <h1>BOOK AN EVENT</h1>
            </div>
        );
    }
}