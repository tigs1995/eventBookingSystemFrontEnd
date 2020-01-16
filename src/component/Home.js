import React, { Component } from 'react';

export default class Home extends Component{

  yesClicked = (event) => {
    event.preventDefault();
    this.props.history.push('./ExistingCustomer');
  }

  noClicked = (event) => {
    event.preventDefault();
    this.props.history.push('./NewCustomer');
  }

  adminClicked = (event) => {
    event.preventDefault();
    this.props.history.push('./AdminPassword');
  }

  render(){
    return (
      <div>
        <p>Do you have a customer reference number?</p>
        <form>
        <button type='yes' onClick={this.yesClicked}>Yes</button>
        <button onClick={this.noClicked}>No</button>
        <br />
        <button className='homeButton' onClick={this.adminClicked}>Admin</button>
        </form>
      </div>
    );
  }
}

