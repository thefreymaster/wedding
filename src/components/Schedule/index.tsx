import { Box, Text } from '@chakra-ui/layout';
import { DARK_PRIMARY, SECONDARY_COLOR } from '../../constants';
import { isMobile } from 'react-device-detect';
import { Tag } from '@chakra-ui/react';

const events = [
    {
        time: '5:00pm',
        title: 'Ceremony',
        description: 'Bride, Groom, & Wedding Party Only',
        address: '',
    },
    {
        time: '5:30pm',
        title: 'Cocktail Hour',
        description: 'Enjoy a drinky drink before Elizabeth & Evan Arrive',
        address: '11 Broad Canal Way, Cambridge, MA 02142',
    },
    {
        time: '6:00pm',
        title: 'Reception',
        description: 'All wedding attendees ready to dance & party',
        address: '11 Broad Canal Way, Cambridge, MA 02142',
    },
]

const Title = () => <Text textAlign="center" pb="5" pt="20" color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">Schedule</Text>

const Schedule = () => {
    if (isMobile) {
        return (
            <Box display="flex" flexDir="column" paddingBottom="20" backgroundColor="white">
                <Title />
                {events.map(event => (
                    <Box display="flex" flexDir="column" minH="100px" margin="20px 20px 0px 20px" padding="20px" border="1px solid #0000001a" borderRadius="8px">
                        <Box marginLeft="10" paddingRight="10" borderLeft="2px solid #b6c4bc" />
                        <Box display="flex" flexDir="column" justifyContent="center">
                            <Box display="flex" flexDir="row" marginBottom="2">
                                <Box display="flex" alignItems="flex-end">
                                    <Text color={DARK_PRIMARY} fontSize="2xl" fontWeight="900">{event.title}</Text>
                                </Box>
                                <Box display="flex" flexGrow={1} />
                                <Tag>
                                    <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">{event.time}</Text>
                                </Tag>
                            </Box>
                            <Box>
                                <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">{event.description}</Text>
                            </Box>
                            <Box>
                                <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">{event.address}</Text>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        )
    }
    return (
        <Box display="flex" flexDir="column" paddingBottom="20">
            <Title />
            {events.map(event => (
                <Box display="flex" flexDir="row" minH="100px" marginBottom="20">
                    <Box display="flex" flexDir="column" justifyContent="center">
                        <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500" letterSpacing="10px">{event.time}</Text>
                    </Box>
                    <Box marginLeft="10" paddingRight="10" borderLeft="2px solid #b6c4bc" />
                    <Box display="flex" flexDir="column" justifyContent="center">
                        <Box display="flex" alignItems="flex-end">
                            <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="900" letterSpacing="5px">{event.title}</Text>
                        </Box>
                        <Box>
                            <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">{event.description}</Text>
                        </Box>
                        <Box>
                            <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">{event.address}</Text>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default Schedule;