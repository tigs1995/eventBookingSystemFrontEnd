import React, { Component } from 'react';
import { render } from '@testing-library/react';

class ThankYou extends Component{

  render(){
    return (
      <div>
        <h2>Thank you for your enquiry! 
        We will get back to you within 48 hours.</h2>
      </div>
    );
  }
}
export default (ThankYou);