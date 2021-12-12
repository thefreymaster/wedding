import { Box, Text } from '@chakra-ui/layout';
import { DARK_PRIMARY } from '../../constants';

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

const Schedule = () => {
    return (
        <Box display="flex" flexDir="column" paddingBottom="20">
            {events.map(event => (
                <Box display="flex" flexDir="row" minH="100px" marginTop="20">
                    <Box display="flex" flexDir="column" justifyContent="center">
                        <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="5=00" letterSpacing="10px">{event.time}</Text>
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