import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { DARK_PRIMARY, SECONDARY_COLOR, PRIMARY_COLOR } from '../../constants';
import { PrimaryButton } from '../../common/Buttons/index';
import { Wrapper } from '../../common/Wrapper';
import Schedule from '../Schedule';
import { isMobile } from 'react-device-detect';

const events = [
    {
        title: "Health & Safety",
        blurb: "We are so grateful to hare the opportunity to celebrate this occasion with our lored ones, and re want to provide a safe and comfortable atmosphere in accordance with all health and safety guidelines. We request that all attending guests be fully vaccinated."
    },
    {
        title: "Transportation",
        blurb: "Both hotels are under a 5 minute walk from the venue. No need to rent a car if you fly in! Boston and Cambridge are very walkable. The city also has Uber, the subway and blue bikes.",
    },
    {
        title: "Children",
        blurb: "Please note that this will be an adults only wedding and reception.",
    }
]

export const Venue = () => {
    return (
        <Wrapper in>
            <Box display="flex" flexDir="column" justifyContent="center">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "6xl"} fontWeight="700" letterSpacing={isMobile ? "2px" : "5px"}>FAQ</Text>
            </Box>
            {events.map(event => (
                <Box display="flex" flexDir="column" minH="100px" marginBottom="20" maxW={isMobile ? "90%" : "50%"} minW={isMobile ? "90%" : "50%"}>
                    <Box display="flex" flexDir="column" justifyContent="center">
                        <Text color={PRIMARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">{event.title}</Text>
                    </Box>
                    <Box paddingRight="10" paddingTop="2" marginBottom="2" borderBottom="2px solid #b6c4bc" />
                    <Box display="flex" flexDir="column" justifyContent="center" >
                        <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">
                            {event.blurb}
                        </Text>
                    </Box>
                </Box>
            ))}

        </Wrapper>
    )
}