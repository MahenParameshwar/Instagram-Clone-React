import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { Explore, Home, Inbox } from '../Pages';

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
                </Switch>
            </div>
        );
    }
}

export default Routes;