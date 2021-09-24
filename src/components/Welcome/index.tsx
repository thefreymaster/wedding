import React from 'react';
import { Box, Button, Fade, Text } from '@chakra-ui/react';
import { LogoLottie } from '../../common/Logo';
import JSON from '../../lottie/logo.json';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import './welcome.css';
import classNames from 'classnames';
import { ArrowDown } from '../../common/ArrowDown';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useHistory } from 'react-router-dom';

export const Welcome = (props: {
    page: number
}) => {
    const history = useHistory();
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 3000);
        setTimeout(() => {
            setAnimate(true);
        }, 4500);
        setTimeout(() => {
            setAnimate3(true);
        }, 6000);
    }, []);

    return (
        <ReactScrollWheelHandler
            upHandler={(e) => console.log("scroll up")}
            downHandler={(e) => history.push('/eande')}
        >
            <Box style={{
                width: 'calc(100vw)',
                height: '100vh',
            }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDir="column"
            >
                <LogoLottie height={250} width={250} play json={JSON} />
                <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                    <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="10px">WE'RE GETTING MARRIED</Text>
                </Box>
                <Box p="1" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                    <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="200" letterSpacing="20px">ELIZABETH & EVAN</Text>
                </Box>
                <ArrowDown animate={animate3} heightModifier="120%" to="/eande">
                    <Button colorScheme="white" variant="ghost">
                        Continue
                    </Button>
                </ArrowDown>
            </Box>
        </ReactScrollWheelHandler>
    )
}