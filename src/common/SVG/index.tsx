import React from 'react';
import classNames from 'classnames';
import SKYLINE from '../../assets/skyline-top.svg';
import './svg.css';

export const SVG = (props: { data: any, style?: any, className?: any }) => {

    return (
        <img className={props.className} style={{ ...props.style }} src={props.data} alt="svg" />
    )
}

export const Skyline = (props: { timing: number }) => {
    const [animate, setAnimate] = React.useState(false);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, props.timing);
    }, []);

    return (
        <SVG
            className={classNames({ "fade-in-20": animate, 'invisible': !animate })}
            data={SKYLINE}
            style={{
                position: 'fixed',
                bottom: 0,
                right: 0,
                zIndex: -1,
            }}
        />
    )
}