import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Wrapper } from '../../common/Wrapper';

export const Found = () => {
    const location = useLocation();
    const history = useHistory();
    const { state }: any = location;
    const { attendee } = state;

    if(!attendee){
        history.push('/rsvp');
    }
    console.log(location);
    return (
        <Wrapper in>
            {attendee.prettyName}
        </Wrapper>
    )
}