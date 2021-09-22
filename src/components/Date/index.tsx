import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { LogoLottie } from '../Logo/index';
import JSON from '../../lottie/logo-date.json';

export const Date = (props: {
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
            <LogoLottie height={250} width={250} play={props.page === 1} json={JSON} />
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="10px">JULY 3RD, 2022</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="200" letterSpacing="20px">ELIZABETH & EVAN</Text>
            </Box>
        </Box>
    )
}