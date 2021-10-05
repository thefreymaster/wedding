import classNames from 'classnames';
import SKYLINE from '../../assets/skyline-top.svg';
import './svg.css';
import { Box } from '@chakra-ui/react';

export const SVG = (props: { data: any, style?: any, className?: any }) => {
    return (
        <img className={props.className} style={{ ...props.style }} src={props.data} alt="svg" />
    )
}

export const Skyline = (props: { timing: number }) => {
    return (
        <Box>
            <SVG
                className={classNames('opacity-20')}
                data={SKYLINE}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                    zIndex: -1,
                }}
            />
        </Box>
    )
}