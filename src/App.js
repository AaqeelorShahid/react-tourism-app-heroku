import './App.css';
import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import homepage from './pages/homepage/homepage.component'

import customer from './pages/customer/customer.component';
import addcustomer from './pages/addcustomer/addcustomer.component';
import formpage from './pages/editcustomer/formpage.component';

import hotel from './pages/hotel/hotel.component'
import edithotel from './pages/edithotel/edithotel.component';
import addhotel from './pages/addhotel/addhotel.component';

import pack from './pages/pack/pack.component';
import packedit from './pages/editpack/packedit.component';
import addpack from './pages/addpack/addpack.component';

import user from './pages/user/user.component';
import useredit from './pages/edituser/useredit.component';
import adduser from './pages/adduser/adduser.component';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={homepage}/>
          <Route exact path="/customer" component={customer}/>
          <Route exact path="/customer/edit" component={formpage}/>
          <Route exact path="/customer/add" component={ addcustomer }/>

          <Route exact path="/hotels" component={ hotel }/>
          <Route exact path="/hotels/add" component={ addhotel }/>
          <Route exact path="/hotels/edit" component={edithotel}/>

          <Route exact path="/packs" component={ pack }/>
          <Route exact path="/packs/add" component={ addpack }/>
          <Route exact path="/packs/edit" component={packedit}/>

          <Route exact path="/user" component={ user }/>
          <Route exact path="/user/add" component={ adduser }/>
          <Route exact path="/user/edit" component={ useredit }/>
        </Switch>
      </div>
    );
  }  
}
 
export default App;
