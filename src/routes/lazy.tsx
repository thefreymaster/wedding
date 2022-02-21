import React from "react";

const Welcome = React.lazy(() => import("../components/Welcome"));

const Us = React.lazy(() => import("../components/Us"));

const FAQ = React.lazy(() => import("../components/FAQ"));

const Lodging = React.lazy(() => import("../components/Lodging"));

const Attractions = React.lazy(() => import("../components/Attractions"));

const RSVP = React.lazy(() => import("../components/RSVP"));

const Found = React.lazy(() => import("../components/RSVP/Found"));

const Success = React.lazy(() => import("../components/RSVP/Success"));

const Attendees = React.lazy(() => import("../components/Attendees"));

const Registry = React.lazy(() => import("../components/Registry"));

const Lazy = {
    Welcome,
    Us,
    FAQ,
    Lodging,
    Attractions,
    RSVP,
    Found,
    Success,
    Attendees,
    Registry
}

export default Lazy;
