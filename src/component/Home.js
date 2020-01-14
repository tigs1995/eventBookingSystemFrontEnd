import React, { Component } from 'react';

class Home extends Component{

  yesClicked = (e) => {
    e.preventDefault();
    this.props.history.push('./ExistingCustomer');
  }

  noClicked = (e) => {
    e.preventDefault();
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
        <button className='homebutton' onClick={this.adminClicked}>Admin</button>
        </form>
      </div>
    );
  }
}
export default (Home);

