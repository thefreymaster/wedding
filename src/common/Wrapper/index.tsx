import React from 'react';
import { Box, ScaleFade } from '@chakra-ui/react';
import { Skyline } from '../SVG';

export const Wrapper = (props: { children: React.ReactNode, in: boolean, justifyContent?: string }) => {
    return (
        <>
            <ScaleFade initialScale={0.9} in={props.in}>
                <Box style={{
                    width: 'calc(100vw)',
                    minHeight: 'calc(100vh - 60px)',
                    marginTop: '60px'
                }}
                    display="flex"
                    justifyContent={props.justifyContent || "center"}
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