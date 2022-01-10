import { HiChevronDoubleDown } from 'react-icons/hi';
import { Box, Fade } from '@chakra-ui/react';
import './arrow-down.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { PRIMARY_COLOR } from '../../constants';

export const ArrowDown = (props: {
    animate?: boolean;
    heightModifier?: string;
    to?: string;
    children?: React.ReactNode;
    bottomFixed?: boolean;
}) => {
    return (
        <Box position={props.bottomFixed ? 'absolute' : 'inherit'} top={props.bottomFixed ? 'calc(100vh - 70px)' : 'auto'}>
            <Box style={{
                position: 'relative',
                bottom: `calc(100vh - ${props.heightModifier})`
            }}
                className={classNames({ "invisible": !props.animate })}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="row"
            >
                <Box margin="2" >
                    <Fade in={props.animate}>
                        <Box className={classNames({ "bounce": props.animate, "invisible": !props.animate })}>
                            {props.to ?
                                <Link to={props.to || ''}>
                                    <HiChevronDoubleDown color={PRIMARY_COLOR} />
                                </Link>
                                : <HiChevronDoubleDown color={PRIMARY_COLOR} />
                            }
                        </Box>
                    </Fade>
                </Box>
            </Box>

        </Box>
    )
}