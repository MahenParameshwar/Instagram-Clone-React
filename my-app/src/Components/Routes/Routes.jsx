import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { Explore, Home, Inbox } from '../Pages';
import {Login} from "../Pages/Login/Login";
import {Registration} from "../Pages/Registration"
import ViewProfile from '../Pages/ViewProfile';
import {PrivateRoute} from "./PrivateRoute"

class Routes extends Component {
    render() {
        return (
            <div>
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
                    
                    <Route path="/viewprofile/:user" exact
                    render = {()=><ViewProfile />} />
                </Switch>
            </div>
        );
    }
}

export default Routes;