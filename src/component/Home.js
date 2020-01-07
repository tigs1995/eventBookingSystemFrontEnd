import React, { Component } from 'react';
import { render } from '@testing-library/react';

class Home extends Component{

  yesClicked = (e) => {
    e.preventDefault();
    window.location.pathname = './ExistingCustomer';
  }

  noClicked = (e) => {
    e.preventDefault();
    window.location.pathname = './NewCustomer';
  }

  render(){
    return (
      <div>
        <p>Do You have a customer reference number?</p>
        <button type='yes' onClick={this.yesClicked}>Yes</button>
        <button onClick={this.noClicked}>No</button>
      </div>
    );
  }
}
export default (Home);

