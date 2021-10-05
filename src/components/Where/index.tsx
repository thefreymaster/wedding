import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { DARK_PRIMARY, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { SkylineSVG } from '../../common/Logo';
import { ArrowDown } from '../../common/ArrowDown/index';
import { PrimaryButton } from '../../common/Buttons/index';
import { Skyline } from '../../common/SVG';

export const Where = (props: {
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
            <ArrowDown heightModifier="137%" animate to="/when" bottomFixed>
                <PrimaryButton variant="solid">
                    WHEN
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box >
    )
}