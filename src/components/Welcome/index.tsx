import React from 'react';
import { Box, Fade, Text } from '@chakra-ui/react';
import { LogoLottie } from '../../common/Logo';
import JSON from '../../lottie/logo.json';
import { PRIMARY_COLOR } from '../../constants';
import './welcome.css';

export const Welcome = (props: {
    page: number
}) => {
    const [animate, setAnimate] = React.useState(false);
    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 4000);
    }, [])

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
            <LogoLottie height={250} width={250} play={props.page === 0} json={JSON} />
            {animate && (
                <Box p="1" className="fade-in">
                    <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="200" letterSpacing="20px">ELIZABETH & EVAN</Text>
                </Box>
            )}
        </Box>
    )
}