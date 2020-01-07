import React, { Component } from 'react';
import { render } from '@testing-library/react';

class ExistingCustomer extends Component{
  state = {
    custReference: 0,
    errorMessage: '',
    disabled: true
  }

  validation = (event) => {
    let custRef = event.target.value;
    let err = '';
    event.preventDefault();
    
    if (custRef == ""){
      err = '';
      this.setState({disabled: true});
    }
    else if (!Number(custRef)){
      err = <small>Your customer reference must be a number.</small>
      this.setState({disabled: true});
    }
    else {
      this.setState({custReference: custRef});
      this.setState({disabled: false});
    }
    this.setState({errorMessage: err});
  }

  onSubmitClick = (event) => {
    event.preventDefault();
    window.location.pathname = './ThankYou';
  }

  render(){
    return (
      <div>
      <form>
        <input type="long" placeholder="Customer Ref Number" name="cust-ref" onChange={this.validation} required></input>
        <button disabled={this.state.disabled} onClick={this.onSubmitClick}>Submit</button>
      {this.state.errorMessage}
      </form>
      </div>
    );
  }
}

export default (ExistingCustomer);

