import React from 'react';
import { Box, Text, Divider } from '@chakra-ui/react';
import { DARK_PRIMARY, SECONDARY_COLOR } from '../../constants';
import { ArrowDown } from '../../common/ArrowDown/index';
import { PrimaryButton } from '../../common/Buttons/index';
import { Skyline } from '../../common/SVG';
import { isMobile } from 'react-device-detect';
import { Wrapper } from '../../common/Wrapper';

export const Venue = () => {
    return (
        <Wrapper in>
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
            <Divider pt="10" mb="10" />
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">WHERE</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="4xl" fontWeight="700" letterSpacing="2px" textAlign="center">COMMONWEATH CAMBRIDGE</Text>
            </Box>
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="sm" fontWeight="300" textAlign="center">11 BROAD CANAL WAY, CAMBRIDGE, MA 02142</Text>
            </Box>
            <Box p="1" />
            <PrimaryButton variant="solid" onClick={() => {
                window.open('https://goo.gl/maps/uaTk52WcF3aSBTNv6', '_blank');
            }}>
                Open in Google Maps
            </PrimaryButton>
            {/* <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="200" letterSpacing="20px">CAMBRIDGE, MA</Text>
            </Box> */}
            <ArrowDown heightModifier="137%" animate to="/lodging" bottomFixed>
                <PrimaryButton variant="solid">
                    Lodging
                </PrimaryButton>
            </ArrowDown>
        </Wrapper>
    )
}