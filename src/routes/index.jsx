import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from '../App';
import { Us } from '../components/Us';
import { Where } from '../components/Where/index';
import { When } from '../components/When/index';
import { RSVP } from '../components/RSVP/index';
import { Welcome } from '../components/Welcome/index';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route exact path="/eande">
                <Us />
            </Route>
            <Route exact path="/where">
                <Where />
            </Route>
            <Route exact path="/when">
                <When />
            </Route>
            <Route exact path="/join-us">
                <RSVP />
            </Route>
            <Route exact path="/registry">
                {/* <Registry /> */}
            </Route>
            <Route exact path="/*">
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Router;