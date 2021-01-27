import React from 'react';
import {Link, NavLink, Route, Switch, BrowserRouter} from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import Companions from './components/Companions/Companions';
import Workspaces from './components/Workspaces/Workspaces';
import Orders from './components/Orders/Orders';
import Invoices from './components/Invoices/Invoices';

const Routes = () =>(
    <BrowserRouter>
        <Switch>   
            <Route exact path='/' component={Login}/>
            <Route  path='/home' component={Home}/>
            <Route  path='/login' component={Login}/>
            {/* <Route path="/register" component={Register}/> */}
            <Route  path='/companions' component={Companions}/>
            <Route  path='/workspaces' component={Workspaces}/>
            <Route  path='/orders' component={Orders}/>
            <Route  path='/invoices' component={Invoices}/>
            <Route  path='/welcome' component={Welcome}/> 
            <Route  path='/*' component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;