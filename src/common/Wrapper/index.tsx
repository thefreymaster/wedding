import React from 'react';
import { Box, ScaleFade } from '@chakra-ui/react';
import { Skyline } from '../SVG';

export const Wrapper = (props: { children: React.ReactNode, in: boolean }) => {
    return (
        <>
            <ScaleFade initialScale={0.9} in={props.in}>
                <Box style={{
                    width: 'calc(100vw)',
                    height: '100vh',
                }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                >
                    {props.children}
                </Box>
            </ScaleFade>
            <Skyline timing={200} />
        </>
    )
}