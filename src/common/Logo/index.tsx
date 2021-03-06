import React from 'react';
import Lottie from 'react-lottie-player'
import logoJson from '../../lottie/logo.json'
import SVG from '../../assets/logo.svg';
import SKYLINE from '../../assets/skyline.svg';

export const LogoLottie = (props: {
    width?: number | 200,
    height?: number | 200,
    json: any,
    play?: boolean | true,
}) => {
    return (
        <Lottie
            loop={0}
            animationData={props.json}
            play={props.play}
            style={{ width: props.width, height: props.height }}
        />
    )
}

export const Logo = (props: {
    width: number | 200,
    height: number | 200,
    play?: boolean | true,
}) => {
    return (
        <Lottie
            animationData={logoJson}
            play={props.play}
            style={{ width: props.width, height: props.height }}
        />
    )
}

export const LogoSVG = (props: {
    width: number | 200,
    height: number | 200,
}) => {
    return (
        <img
            src={SVG}
            style={{ width: props.width, height: props.height }}
        />
    )
}

export const SkylineSVG = (props: {
    width: number | 200,
    height: number | 200,
}) => {
    return (
        <img
            src={SKYLINE}
            style={{ width: props.width, height: props.height }}
        />
    )
}

