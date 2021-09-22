import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { LogoSVG } from '../Logo';
import { PRIMARY_COLOR } from '../../constants';
import { Logo } from '../Logo/index';

export const RSVP = (props: {
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
            <Logo height={280} width={500} play={props.page === 3} />
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="200" letterSpacing="20px">RSVP</Text>
            </Box>
        </Box>
    )
}