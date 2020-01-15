import React, { Component } from 'react';

export default class Header extends Component {

    homeClicked = (event) => {
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <button className='homebutton' onClick={this.homeClicked}>Home</button>
                <h1 href="/">BOOK AN EVENT</h1>
            </div>
        );
    }
}