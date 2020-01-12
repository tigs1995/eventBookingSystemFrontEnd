import React, { Component } from 'react';

class Home extends Component{

  yesClicked = (e) => {
    e.preventDefault();
    window.location.pathname = './ExistingCustomer';
  }

  noClicked = (e) => {
    e.preventDefault();
    window.location.pathname = './NewCustomer';
  }

  adminClicked = (event) => {
    event.preventDefault();
    
    window.location.pathname = './AdminPassword';
  }

  render(){
    return (
      <div>
        <p>Do you have a customer reference number?</p>
        <form>
        <button id="yesButton" onClick={this.yesClicked}>Yes</button>
        <button if="noButton" onClick={this.noClicked}>No</button>
        <br />
        <button id='adminButton' className='homebutton' onClick={this.adminClicked}>Admin</button>
        </form>
      </div>
    );
  }
}
export default (Home);

