import React from 'react';
import { Box, Image, ScaleFade, Text } from '@chakra-ui/react';
import { AWS_PHOTOS, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { ArrowDown } from '../../common/ArrowDown/index';
import classNames from 'classnames';

import MET from '../../assets/met.jpeg';
import MOVEIN from '../../assets/movedin.jpeg';
import BOSTON from '../../assets/boston.jpeg';
import ENGAGED from '../../assets/engaged.jpeg';
import PLANEENGAGED from '../../assets/plane-engaged.jpeg';

import { PrimaryButton } from '../../common/Buttons/index';
import { Skyline } from '../../common/SVG';
import { isMobile } from 'react-device-detect';

import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export const WeMet = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 1000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 2000);
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
                <Image src={MET} alt="elizabeth&evan" maxW={240} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" pt="4" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="5px">SEPTEMBER 28th, 2017</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="2xl" fontWeight="500" letterSpacing="10px">WE MET</Text>
            </Box>
            <ArrowDown animate={animate3} heightModifier="115%" to="/eande/moved-in" bottomFixed>
                <PrimaryButton variant="solid">
                    CONTINUE
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box>
    )
}

export const WeMoveIn = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    // document.addEventListener('scroll', function (e) {
    //     if (window.scrollY > window.innerHeight * 0.5) {
    //         setTimeout(() => {
    //             setAnimate2(true);
    //         }, 1000);
    //         setTimeout(() => {
    //             setAnimate(true);
    //         }, 0);
    //         setTimeout(() => {
    //             setAnimate3(true);
    //         }, 2000);
    //     }
    // });


    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 1000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 2000);
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
                <Image src={MOVEIN} alt="elizabeth&evan" maxW={300} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" pt="4" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="5px">JULY 2019</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="3xl" fontWeight="500" letterSpacing="10px">WE MOVED IN</Text>
            </Box>
            <ArrowDown animate={animate3} heightModifier="115%" to="/eande/moved" bottomFixed>
                <PrimaryButton variant="solid">
                    CONTINUE
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box>
    )
}

export const WeMove = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    // document.addEventListener('scroll', function (e) {
    //     if (window.scrollY > window.innerHeight * 1.5) {
    //         setTimeout(() => {
    //             setAnimate2(true);
    //         }, 1000);
    //         setTimeout(() => {
    //             setAnimate(true);
    //         }, 0);
    //         setTimeout(() => {
    //             setAnimate3(true);
    //         }, 2000);
    //     }
    // });


    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 1000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 2000);
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
                <Image src={BOSTON} alt="elizabeth&evan" maxW={isMobile ? 280 : 480} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" pt="4" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="5px">JUNE 2021</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="2xl" fontWeight="500" letterSpacing="10px" textAlign="center">WE MOVED TO BOSTON</Text>
            </Box>
            <ArrowDown animate={animate3} heightModifier="115%" to="/eande/engaged" bottomFixed>
                <PrimaryButton variant="solid">
                    CONTINUE
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box>
    )
}

export const WeEngaged = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    // document.addEventListener('scroll', function (e) {
    //     if (window.scrollY > window.innerHeight * 2.5) {
    //         setTimeout(() => {
    //             setAnimate2(true);
    //         }, 1000);
    //         setTimeout(() => {
    //             setAnimate(true);
    //         }, 0);
    //         setTimeout(() => {
    //             setAnimate3(true);
    //         }, 2000);
    //     }
    // });



    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 1000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 2000);
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
                <Image src={ENGAGED} alt="elizabeth&evan" maxW={280} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" pt="4" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="5px">AUGUST 2021</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="3xl" fontWeight="500" letterSpacing="6px" textAlign="center">WE GOT ENGAGED</Text>
            </Box>
            <ArrowDown animate={animate3} heightModifier="115%" to="/eande/married" bottomFixed>
                <PrimaryButton variant="solid">
                    CONTINUE
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box>
    )
}

export const WeGetMarried = () => {
    const [animate, setAnimate] = React.useState(false);
    const [animate2, setAnimate2] = React.useState(false);
    const [animate3, setAnimate3] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate2(true);
        }, 1000);
        setTimeout(() => {
            setAnimate(true);
        }, 200);
        setTimeout(() => {
            setAnimate3(true);
        }, 2000);
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
                <Image src={PLANEENGAGED} alt="elizabeth&evan" maxW={250} borderRadius={8} boxShadow="lg" />
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate, 'invisible': !animate })}>
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="5px">JULY 3RD, 2022</Text>
            </Box>
            <Box p="1" className={classNames({ "fade-in": animate2, 'invisible': !animate2 })}>
                <Text color={PRIMARY_COLOR} fontSize="4xl" fontWeight="500" letterSpacing="2px">WE GET MARRIED</Text>
            </Box>
            <ArrowDown animate={animate3} heightModifier="115%" to="/where" bottomFixed>
                <PrimaryButton variant="solid">
                    WHERE
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box>
    )
}

export const Us = () => {



    return (
        <Box style={{
            width: 'calc(100vw)',
            height: '100vh',
        }}>
            <LightGallery
                onInit={() => { console.log('done') }}
                mode="lg-fade"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDir="row"
                    flexWrap="wrap"
                >
                {AWS_PHOTOS.map(image => (
                    <ScaleFade initialScale={0.95} in
                        transition={{
                            enter: { duration: Math.random() * (1 - 0) + 1 },
                            exit: { duration: 0.1 },
                        }}
                        style={{ willChange: 'transform' }}
                    >
                        {/* <a key={image.src} href={image.src} data-src={image.src}> */}
                            <img style={{ width: 400 }} alt={image.src} src={image.src} />
                        {/* </a> */}
                    </ScaleFade>
                ))}
                </Box>
            </LightGallery>
            <ArrowDown animate to="/venue">
                <PrimaryButton variant="solid">
                    VENUE
                </PrimaryButton>
            </ArrowDown>
            <Skyline timing={200} />
        </Box>
    )
}