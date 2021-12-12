import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { LogoLottie } from '../../common/Logo';
import JSON from '../../lottie/logo.json';
import { SECONDARY_COLOR, DARK_PRIMARY } from '../../constants';
import './welcome.css';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import { Skyline } from '../../common/SVG/index';
import Schedule from '../Schedule';
import { Legal } from '../Legal';

export const Welcome = (props: {
    page: number
}) => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate4, setAnimate4] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 3000);
        setTimeout(() => {
            setAnimate2(true);
        }, 2000);
        setTimeout(() => {
            setAnimate4(true);
        }, 4000);
    }, []);

    return (
        <Box>
            <Box style={{
                width: 'calc(100vw)',
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
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDir="row"
                    alignItems="center"
                    paddingTop="10"
                >
                    <Box p="1" className={classNames({ "fade-in": animate4, 'invisible': !animate4 })}>
                        <Text color={SECONDARY_COLOR} fontSize={isMobile ? "1xl" : "2xl"} fontWeight="500" letterSpacing="10px">JULY 3RD, 2022</Text>
                    </Box>
                    <Box className={classNames({ "fade-in": animate4, 'invisible': !animate4 })} borderRight="2px solid #b6c4bc" minH="100px" marginRight="15" marginLeft="15" />
                    <Box p="1" className={classNames({ "fade-in": animate4, 'invisible': !animate4 })}>
                        <Text color={SECONDARY_COLOR} fontSize={isMobile ? "1xl" : "2xl"} fontWeight="500" letterSpacing="10px">CAMBRIDGE, MA</Text>
                    </Box>
                </Box>
                <Box flexGrow={1} />
                <Box className={classNames({ "fade-in": animate4, 'invisible': !animate4 })}>
                    <Schedule />
                </Box>
                <Legal />
            </Box>
            <Skyline timing={200} />
        </Box>
    )
}