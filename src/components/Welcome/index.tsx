import React from 'react';
import { Box, Button, Fade, Text } from '@chakra-ui/react';
import { LogoLottie } from '../../common/Logo';
import JSON from '../../lottie/logo.json';
import { PRIMARY_COLOR, SECONDARY_COLOR, DARK_PRIMARY } from '../../constants';
import './welcome.css';
import classNames from 'classnames';
import { ArrowDown } from '../../common/ArrowDown';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../../common/Buttons/index';
import { isMobile } from 'react-device-detect';
import { Skyline, SVG } from '../../common/SVG/index';
import SKYLINE from '../../assets/skyline-top.svg';

const event = {
    title: 'Sample Event',
    description: 'This is the sample event provided as an example only',
    location: 'Portland, OR',
    startTime: '2016-09-16T20:15:00-04:00',
    endTime: '2016-09-16T21:45:00-04:00'
}

export const Welcome = (props: {
    page: number
}) => {
    const history = useHistory();
    const [animate0, setAnimate0] = React.useState(false);
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);
    const [animate4, setAnimate4] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 3000);
        setTimeout(() => {
            setAnimate2(true);
        }, 2000);
        setTimeout(() => {
            setAnimate3(true);
        }, 5000);
        setTimeout(() => {
            setAnimate4(true);
        }, 4000);
        setTimeout(() => {
            setAnimate0(true);
        }, 4000);
    }, []);

    return (
        <Box>
            <Box style={{
                width: 'calc(100vw)',
                height: '100vh',
            }}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                flexDir="column"
                marginTop="100px"
            >
                <LogoLottie height={250} width={250} play json={JSON} />
                <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                    <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing={isMobile ? "5px" : "10px"}>WE'RE GETTING MARRIED!</Text>
                </Box>
                <Box p="1" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                    <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "6xl"} fontWeight="700" letterSpacing={isMobile ? "2px" : "5px"}>ELIZABETH & EVAN</Text>
                </Box>
                <Box p="1" className={classNames({ "fade-in": animate4, 'invisible': !animate4 })}>
                    <Text color={SECONDARY_COLOR} fontSize={isMobile ? "1xl" : "2xl"} fontWeight="500" letterSpacing="10px">JULY 3RD, 2022</Text>
                </Box>


                {/* <AddToCalendar event={event} /> */}
                <Box flexGrow={1} />
                <ArrowDown animate={animate3} heightModifier="115%" to="/eande" bottomFixed>
                    <PrimaryButton variant="solid">
                        CONTINUE
                    </PrimaryButton>
                </ArrowDown>
            </Box>
            <Skyline timing={200} />
        </Box>
    )
}