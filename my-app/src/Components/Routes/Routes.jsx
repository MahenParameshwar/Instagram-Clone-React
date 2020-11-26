import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import {Login} from "../Pages/Login/Login";
import {Registration} from "../Pages/Registration"
import { Explore, Home, Inbox,SavedPosts,SingelPost,UploadPost } from '../Pages';
import ViewProfile from '../Pages/ViewProfile';
import { PrivateRoute } from './PrivateRoute';

class Routes extends Component {
    render() {
        return (
            <div>
                    <Route path="/login" exact
                    render = {()=><Login />} />

                    <Route path="/reg" exact
                    render = {(props)=><Registration {...props} />} />

                    <PrivateRoute path="/" 
                    Component={Header}/>
                    
                    <Switch>
                        
                        <PrivateRoute path = "/"
                        exact Component={Home} /> 
                        
                        <PrivateRoute path="/inbox" exact
                        Component={Inbox} />

                        <PrivateRoute path="/explore" exact
                        Component={Explore} />
                        
                        <PrivateRoute path="/viewpost/:post" exact 
                        Component={SingelPost} />

                        <PrivateRoute path="/viewprofile/:user" exact
                        Component={ViewProfile} />

                        <PrivateRoute path="/savedposts/:user" exact
                        Component={SavedPosts} />
                        

                        <PrivateRoute path="/uploadPost" exact 
                        Component={UploadPost} />

                        

                    </Switch>
                   
            </div>
        );
    }
}

export default Routes;