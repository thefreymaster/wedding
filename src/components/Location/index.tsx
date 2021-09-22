import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { LogoSVG } from '../Logo';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { City } from '../City/index';
import { LogoLottie } from '../Logo/index';
import JSON from '../../lottie/logo-location.json';

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
            <LogoLottie height={250} width={250} play={props.page === 2} json={JSON} />
            <City height={300} width={600} />
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300"  letterSpacing="10px">COMMONWEALTH</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="200" letterSpacing="20px">CAMBRIDGE, MA</Text>
            </Box>
        </Box>
    )
}