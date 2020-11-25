import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import Header from '../Layout/Header/Header';

import {Registration} from "../Pages/Registration"
import { Explore, Home, Inbox } from '../Pages';
<<<<<<< HEAD
import { Login } from '../Pages/Login/Login';
import ViewProfile from '../Pages/ViewProfile';
import { PrivateRoute } from './PrivateRoute';
=======
import {Login} from "../Pages/Login/Login";
import {Registration} from "../Pages/Registration"
import ViewProfile from '../Pages/ViewProfile';
import {PrivateRoute} from "./PrivateRoute"
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44

class Routes extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                   <Route path="/login" exact
                    render = {()=><Login />} />

                    <Route path="/reg" exact
        render = {(props)=><Registration {...props} />} />

                    <PrivateRoute path="/" 
                    Component={Header}/>
                    
=======
                <Switch>
                    <Route path="/login" exact
                    render = {()=><Login />} />

                    <Route path="/reg" exact
                    render = {(props)=><Registration {...props} />} />

                    <PrivateRoute path="/" exact
                    Component = {Home} />

                    <PrivateRoute path="/inbox" exact
                     Component = {Inbox}/>

                    <PrivateRoute path="/explore" exact
                    Component = {Explore} />
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
                    
                    <Switch>
                        <PrivateRoute path = "/"
                        exact Component={Home} /> 
                        
                        <PrivateRoute path="/inbox" exact
                        Component={Inbox} />

                        <PrivateRoute path="/explore" exact
                        Component={Explore} />
                        
                        <PrivateRoute path="/viewprofile/:user" exact
                        Component={ViewProfile} />
                    </Switch>
            </div>
        );
    }
}

export default Routes;