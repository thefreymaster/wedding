import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { DARK_PRIMARY, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { ArrowDown } from '../../common/ArrowDown/index';
import { PrimaryButton } from '../../common/Buttons/index';
import { Skyline } from '../../common/SVG';
import { isMobile } from 'react-device-detect';

export const Lodging = (props: {
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
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">LODGING</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "4xl"} fontWeight="700" letterSpacing="2px" textAlign="center">THE KENDAL HOTEL</Text>
            </Box>
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="sm" fontWeight="300" textAlign="center">350 Main St, Cambridge, MA 02142</Text>
            </Box>
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="sm" fontWeight="300" textAlign="center">
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
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "4xl"} fontWeight="700" letterSpacing="1px" textAlign="center">BOSTON MARRIOTT CAMBRIDGE</Text>
            </Box>
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="sm" fontWeight="300" textAlign="center">50 BROADWAY, CAMBRIDGE, MA 02142</Text>
            </Box>
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="sm" fontWeight="300" textAlign="center">
                    <a href="tel:+16174946600">+1 617-494-6600</a>
                </Text>
            </Box>

            <Box p="1" />

            <PrimaryButton variant="solid" onClick={() => {
                window.open('https://goo.gl/maps/wjUzH9jx8gTfzA6x7', '_blank');
            }}>
                Open in Google Maps
            </PrimaryButton>
            <ArrowDown heightModifier="137%" animate to="/rsvp" bottomFixed>
                <PrimaryButton variant="solid">
                    RSVP
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box >
    )
}