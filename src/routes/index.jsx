import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Us } from '../components/Us';
import { When } from '../components/When/index';
import { RSVP } from '../components/RSVP/index';
import { Welcome } from '../components/Welcome/index';
import { Lodging } from '../components/Lodging/index';
import { Attendees } from '../components/Attendees/index';
import { Registry } from '../components/Registry/index';
import { Venue } from '../components/Venue/index';
import { Attractions } from '../components/Attractions/index';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route exact path="/eande">
                <Us />
            </Route>
            <Route exact path="/venue">
                <Venue />
            </Route>
            <Route exact path="/when">
                <When />
            </Route>
            <Route exact path="/lodging">
                <Lodging />
            </Route>
            <Route exact path="/attractions">
                <Attractions />
            </Route>
            <Route exact path="/rsvp">
                <RSVP />
            </Route>
            <Route exact path="/attendees">
                <Attendees />
            </Route>
            <Route exact path="/registry">
                <Registry />
            </Route>
            <Route exact path="/*">
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Router;