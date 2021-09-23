import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Logo } from '../../common/Logo';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { LogoLottie } from '../../common/Logo/index';
import JSON from '../../lottie/logo.json';
import { ArrowDown } from '../../common/ArrowDown/index';

export const WeMet = (props: {
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
            {/* <LogoLottie height={250} width={250} play={props.page === 1} json={JSON} /> */}
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="5px">SEPTEMBER 28th, 2017</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="2xl" fontWeight="300" letterSpacing="10px">THEY MET</Text>
            </Box>
            <ArrowDown heightModifier="140%" />
        </Box>
    )
}

export const WeMoveIn = (props: {
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
            {/* <LogoLottie height={250} width={250} play={props.page === 1} json={JSON} /> */}
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="5px">JULY, 2019</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="3xl" fontWeight="300" letterSpacing="10px">THEY MOVED IN</Text>
            </Box>
            <ArrowDown heightModifier="140%" />
        </Box>
    )
}

export const WeMove = (props: {
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
            {/* <LogoLottie height={250} width={250} play={props.page === 1} json={JSON} /> */}
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="5px">JULY, 2020</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="4xl" fontWeight="300" letterSpacing="10px">THEY MOVED TO BOSTON</Text>
            </Box>
            <ArrowDown heightModifier="140%" />
        </Box>
    )
}

export const WeEngaged = (props: {
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
            {/* <LogoLottie height={250} width={250} play={props.page === 1} json={JSON} /> */}
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300" letterSpacing="5px">JUNE, 2020</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="5xl" fontWeight="300" letterSpacing="10px">THEY GOT ENGAGE</Text>
            </Box>
            <ArrowDown heightModifier="140%" />
        </Box>
    )
}

export const Us = (props: {
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
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="400" letterSpacing="10px">JULY 3RD, 2022</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="300" letterSpacing="20px">THEY GET MARRIED</Text>
            </Box>
            <ArrowDown heightModifier="130%" />
        </Box>
    )
}