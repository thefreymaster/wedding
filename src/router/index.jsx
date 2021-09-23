import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from '../App';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/*">
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Router;