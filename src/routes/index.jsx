import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { WeEngaged, WeMoveIn, WeMet, WeMove, WeGetMarried } from '../components/Us';
import { Where } from '../components/Where/index';
import { When } from '../components/When/index';
import { RSVP } from '../components/RSVP/index';
import { Welcome } from '../components/Welcome/index';
import { Lodging } from '../components/Lodging/index';
import { Attendees } from '../components/Attendees/index';
import { Registry } from '../components/Registry/index';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route exact path="/eande">
                <WeMet />
            </Route>
            <Route exact path="/eande/moved-in">
                <WeMoveIn />
            </Route>
            <Route exact path="/eande/moved">
                <WeMove />
            </Route>
            <Route exact path="/eande/engaged">
                <WeEngaged />
            </Route>
            <Route exact path="/eande/married">
                <WeGetMarried />
            </Route>
            <Route exact path="/where">
                <Where />
            </Route>
            <Route exact path="/when">
                <When />
            </Route>
            <Route exact path="/lodging">
                <Lodging />
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