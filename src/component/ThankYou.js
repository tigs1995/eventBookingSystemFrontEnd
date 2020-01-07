import React, { Component } from 'react';
import { render } from '@testing-library/react';

class ThankYou extends Component{

  onSubmitClick = (event) => {
    event.preventDefault();
    window.location.pathname = './';
  }

  render(){
    return (
      <div>
        <h2>Thank you for your enquiry! 
        We will get back to you within 48 hours.</h2>
        <button onClick={this.onSubmitClick}>Home</button>
      </div>
    );
  }
}
export default (ThankYou);