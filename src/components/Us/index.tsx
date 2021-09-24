import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { Logo } from '../../common/Logo';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { LogoLottie } from '../../common/Logo/index';
import JSON from '../../lottie/logo.json';
import { ArrowDown } from '../../common/ArrowDown/index';
import classNames from 'classnames';

import MET from '../../assets/met.jpeg';
import MOVEIN from '../../assets/movedin.jpeg';
import BOSTON from '../../assets/boston.jpeg';
import ENGAGED from '../../assets/engaged.jpeg';

import { Parallax } from 'react-scroll-parallax';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

export const WeMet = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 2000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 3000);
    }, []);

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
            <Box p="1" className={classNames({ "fade-in": animate3, 'invisible': !animate3 })}>
                <Image src={MET} alt="Segun Adebayo" maxW={200} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="5px">SEPTEMBER 28th, 2017</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="2xl" fontWeight="300" letterSpacing="10px">THEY MET</Text>
            </Box>
            <ArrowDown heightModifier="125%" animate={animate3} />
        </Box>
    )
}

export const WeMoveIn = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 2000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 3000);
    }, []);

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
            <Box p="1" className={classNames({ "fade-in": animate3, 'invisible': !animate3 })}>
                <Image src={MOVEIN} alt="Segun Adebayo" maxW={400} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="5px">JULY, 2019</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="3xl" fontWeight="300" letterSpacing="10px">THEY MOVED IN</Text>
            </Box>
            <ArrowDown heightModifier="125%" animate={animate3} />
        </Box>
    )
}

export const WeMove = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 2000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 3000);
    }, []);

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
            <Box p="1" className={classNames({ "fade-in": animate3, 'invisible': !animate3 })}>
                <Image src={BOSTON} alt="Segun Adebayo" maxW={400} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="5px">JUNE, 2021</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="4xl" fontWeight="300" letterSpacing="10px">THEY MOVED TO BOSTON</Text>
            </Box>
            <ArrowDown heightModifier="125%" animate={animate3} />
        </Box>
    )
}

export const WeEngaged = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 2000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 3000);
    }, []);

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
            <Box p="1" className={classNames({ "fade-in": animate3, 'invisible': !animate3 })}>
                <Image src={ENGAGED} alt="Segun Adebayo" maxW={400} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="5px">AUGUST, 2021</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="5xl" fontWeight="300" letterSpacing="10px">THEY GOT ENGAGE</Text>
            </Box>
            <ArrowDown heightModifier="125%" animate={animate3} />
        </Box>
    )
}

export const WeGetMarried = () => {
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
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="400" letterSpacing="10px">JULY 3RD, 2022</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="300" letterSpacing="20px">THEY GET MARRIED</Text>
            </Box>
            <ArrowDown heightModifier="130%" animate to="/where">
                <Button colorScheme="white" variant="outline">
                    Continue
                </Button>
            </ArrowDown>
        </Box>
    )
}

export const Us = () => {
    return (
        <>
            <WeMet />
            <WeMoveIn />
            <WeMove />
            <WeEngaged />
            <WeGetMarried />
        </>
    )
}