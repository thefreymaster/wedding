import { Box, Code, Text } from '@chakra-ui/react';
import { AIRBNB_CAMBRIDGE_LINK, DARK_PRIMARY } from '../../constants';
import { ArrowDown } from '../../common/ArrowDown/index';
import { PrimaryButton } from '../../common/Buttons/index';
import { Skyline } from '../../common/SVG';
import { isMobile } from 'react-device-detect';
import { Wrapper } from '../../common/Wrapper';
import { Card, CardFooter } from '../Attractions';

const Description = () => (
    <Box display="flex" alignItems="flex-start" flexDir="column" marginTop="4">
        <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">Use promo code: <Code>BFWG</Code></Text>
        <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">350 Main St, Cambridge, MA 02142</Text>
    </Box>
)

export const Lodging = () => {
    return (
        <Wrapper in>
            <Box display="flex" flexDir="row">
                <Card title="THE KENDALL HOTEL" description={<Description />} badge="LODGING" imageSrc="https://elizabethandevan.s3.amazonaws.com/kendall.jpeg">
                    <CardFooter />
                </Card>
                <Card title="BOSTON MARRIOTT CAMBRIDGE" description={<Description />} badge="LODGING" imageSrc="https://elizabethandevan.s3.amazonaws.com/commonwealth.jpeg">
                    <CardFooter />
                </Card>
                <Card title="AIRBNB" description={<Description />} badge="LODGING" imageSrc="https://elizabethandevan.s3.amazonaws.com/commonwealth.jpeg">
                    <CardFooter />
                </Card>
            </Box>
            {/* <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500" letterSpacing="10px">LODGING</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "3xl"} fontWeight="700" letterSpacing="2px" textAlign="center">THE KENDALL HOTEL</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">Use promo code: <Code>BFWG</Code></Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">350 Main St, Cambridge, MA 02142</Text>
            </Box>

            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">
                    <a href="tel:+16175771300">+1 617-577-1300</a>
                </Text>
            </Box>
            <PrimaryButton variant="solid" onClick={() => {
                window.open('https://goo.gl/maps/XYLyBNvP2bZ9eDcXA', '_blank');
            }}>
                Open in Google Maps
            </PrimaryButton>

            <Box p="5" />
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "3xl"} fontWeight="700" letterSpacing="1px" textAlign="center">BOSTON MARRIOTT CAMBRIDGE</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">50 BROADWAY, CAMBRIDGE, MA 02142</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">
                    <a href="tel:+16174946600">+1 617-494-6600</a>
                </Text>
            </Box>
            <PrimaryButton variant="solid" onClick={() => {
                window.open('https://goo.gl/maps/wjUzH9jx8gTfzA6x7', '_blank');
            }}>
                Open in Google Maps
            </PrimaryButton>

            <Box p="1" />

            <Box p="5" />
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "3xl"} fontWeight="700" letterSpacing="1px" textAlign="center">AIRBNB</Text>
            </Box>
            <Box p="1" />

            <PrimaryButton variant="solid" onClick={() => {
                window.open(AIRBNB_CAMBRIDGE_LINK, '_blank');
            }}>
                Airbnb Cambridge
            </PrimaryButton> */}
        </Wrapper >
    )
}