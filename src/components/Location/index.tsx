import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { LogoLottie, SkylineSVG } from '../../common/Logo';
import JSON from '../../lottie/logo-location.json';
import CITY from '../../lottie/city.json';

export const Location = (props: {
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
            <SkylineSVG width={800} height={400} />
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300"  letterSpacing="10px">WHERE</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="200" letterSpacing="20px">CAMBRIDGE, MA</Text>
            </Box>
        </Box>
    )
}