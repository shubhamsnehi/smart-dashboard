import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from './components/Welcome/Welcome';
import NotFound from './components/NotFound/NotFound';
import Dropdown from './components/Dropdown/Dropdown';
import Register from './components/Register/Register';



const Routes2 = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path='/home/' component={Welcome}/>
        <Route  path='/home/country' component={Dropdown}/> 
        <Route path="/register" component={Register}/>
        <Route  path='/home/*' component={NotFound}/>
    </Switch>
    </BrowserRouter>
);

export default Routes2;