import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from '../App';

const Router = () => {
    return (
        <Switch>
            <Route path="/:route">
                <App />
            </Route>
            {/* <Route exact path="/eande">
                <App />
            </Route>
            <Route exact path="/where">
                <App />
            </Route>
            <Route exact path="/when">
                <App />
            </Route>
            <Route exact path="/join-us">
                <App />
            </Route>
            <Route exact path="/registry">
                <App />
            </Route> */}
            <Route exact path="/*">
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Router;