import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { Explore, Home, Inbox } from '../Pages';
import ViewProfile from '../Pages/ViewProfile';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact
                    render = {()=><Home />} />

                    <Route path="/inbox" exact
                    render = {()=><Inbox />} />

                    <Route path="/explore" exact
                    render = {()=><Explore />} />
                    
                    <Route path="/viewprofile/:user" exact
                    render = {()=><ViewProfile />} />
                </Switch>
            </div>
        );
    }
}

export default Routes;