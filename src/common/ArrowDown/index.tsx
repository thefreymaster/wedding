import { HiChevronDoubleDown } from 'react-icons/hi';
import { Box, Fade } from '@chakra-ui/react';
import './arrow-down.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const ArrowDown = (props: {
    animate?: boolean;
    heightModifier?: string;
    to?: string;
    children?: React.ReactNode;
}) => {
    return (
        <>
            <Box style={{
                position: 'relative',
                bottom: `calc(100vh - ${props.heightModifier})`
            }}
                className={classNames({ "invisible": !props.animate })}
                display="flex"
                alignItems="center"
                flexDir="column"
            >
                <Box className={classNames({ "bounce": props.animate, "invisible": !props.animate })}>
                    {props.to ?
                        <Link to={props.to || ''}>
                            <HiChevronDoubleDown />
                        </Link>
                        : <HiChevronDoubleDown />
                    }
                </Box>
                <Fade in={props.animate}>
                    <Link to={props.to || ''}>
                        {props.children}
                    </Link>
                </Fade>
            </Box>

        </>
    )
}