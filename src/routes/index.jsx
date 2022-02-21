import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Lazy from "./lazy";

const Router = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/">
          <Lazy.Welcome />
        </Route>
        <Route exact path="/eande">
          <Lazy.Us />
        </Route>
        <Route exact path="/faq">
          <Lazy.FAQ />
        </Route>
        <Route exact path="/when">
          <Lazy.When />
        </Route>
        <Route exact path="/lodging">
          <Lazy.Lodging />
        </Route>
        <Route exact path="/attractions">
          <Lazy.Attractions />
        </Route>
        <Route exact path="/rsvp">
          <Lazy.RSVP />
        </Route>
        <Route exact path="/rsvp/found">
          <Lazy.Found />
        </Route>
        <Route exact path="/rsvp/success">
          <Lazy.Success />
        </Route>
        <Route exact path="/attendees">
          <Lazy.Attendees />
        </Route>
        <Route exact path="/registry">
          <Lazy.Registry />
        </Route>
        <Route exact path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </React.Suspense>
  );
};

export default Router;
