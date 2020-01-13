import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Home  from './component/Home';
import Event from './component/Event';
import ExistingCust from './component/ExistingCustomer';
import NewCustomer from './component/NewCustomer';
import ThankYou from './component/ThankYou';
import Header  from './component/Header';
import Footer from './component/Footer';
import Admin from './component/Admin/Admin';
import AdminPassword from './component/Admin/AdminPassword'
import UpdateCust from './component/Admin/UpdateCust'
import UpdateCustID from './component/Admin/UpdateCustID'
import UpdateEvent from './component/Admin/UpdateEvent'
import UpdateEventID from './component/Admin/UpdateEventID'
import DeleteCust from './component/Admin/DeleteCust'
import DeleteEvent from './component/Admin/DeleteEvent'
import ViewCusts from './component/Admin/ViewCusts'
import ViewEvents from './component/Admin/ViewEvents'


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
            <Route path="/admin" component={Admin} />
            <Route path="/adminpassword" component={AdminPassword} />
            <Route path="/updatecust" component={UpdateCust} />
            <Route path="/updatecustid/:custid" component={UpdateCustID} />
            <Route path="/updateeventid/:eventid" component={UpdateEventID} />
            <Route path="/updateevent" component={UpdateEvent} />
            <Route path="/deletecust" component={DeleteCust} />
            <Route path="/deleteevent" component={DeleteEvent} />
            <Route path="/viewcusts" component={ViewCusts} />
            <Route path="/viewevents" component={ViewEvents} />
          </Switch>
          <Footer/>
          </div>
        </Router>
    );
  }
}


export default App;
