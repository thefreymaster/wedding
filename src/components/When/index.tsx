import { Box, Text } from '@chakra-ui/react';
import { DARK_PRIMARY, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { ArrowDown } from '../../common/ArrowDown/index';
import { PrimaryButton } from '../../common/Buttons/index';
import { isMobile } from 'react-device-detect';
import { Skyline } from '../../common/SVG';

export const When = (props: {
    page: number
}) => {
    return (
        <Box style={{
            width: 'calc(100vw)',
            height: '100vh',
        }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
        >
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">WHEN</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "3xl" : "4xl"} fontWeight="700" letterSpacing={isMobile ? "5px" : "6px"} textAlign="center">JULY 3RD, 2022</Text>
            </Box>
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="lg" fontWeight="400" letterSpacing="4px">5:00pm</Text>
            </Box>
            <Box p="1" />
            <PrimaryButton variant="solid" onClick={() => {
                window.open('https://calendar.google.com/event?action=TEMPLATE&tmeid=MXBvdTd0NHRpNWhpbmxvNXFhZ2dndWgyazYgZWFuZGUwOTI4QG0&tmsrc=eande0928%40gmail.com', '_blank');
            }}>
                Add to Calendar
            </PrimaryButton>

            <ArrowDown heightModifier="135%" animate to="/lodging" bottomFixed>
                <PrimaryButton variant="solid">
                    LODGING
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box>
    )
}