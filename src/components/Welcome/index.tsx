import React from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from '../Logo';

export const Welcome = (props: {
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
        >
            <Logo width={500} height={500} play />
        </Box>
    )
}