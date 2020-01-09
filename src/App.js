import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Home  from './component/Home';
import Event from './component/Event';
import ExistingCust from './component/ExistingCustomer';
import NewCustomer from './component/NewCustomer';
import ThankYou from './component/ThankYou';
import NoMatch from './component/NoMatch';
import  Header  from './component/Header';
import Footer from './component/Footer';


class App extends Component{
  render() {
    return (
        <Router>
          <div>
            <Header />
            <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/existingcustomer" component={ExistingCust} />
            <Route path="/newcustomer" component={NewCustomer} />
            <Route path="/event/:custid" component={Event} />
            <Route path="/thankyou" component={ThankYou} />
            <Route component={NoMatch} />
          </Switch>
          <Footer/>
          </div>
        </Router>
    );
  }
}


export default App;
