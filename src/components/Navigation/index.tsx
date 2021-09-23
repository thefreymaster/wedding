import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { LogoSVG } from '../../common/Logo';

const links = [{
    title: 'Home',
    url: '/',
    next: 0
}, {
    title: 'E & E',
    url: '/',
    next: 1
}, {
    title: 'Where',
    url: '/',
    next: 6
}, {
    title: 'When',
    url: '/',
    next: 7
}, {
    title: 'Join',
    url: '/',
    next: 8
}, {
    title: 'Registry',
    url: '/',
    next: 9
},]

export const Navigation = (props: {
    page: number;
    setPage(index: number): void;
}) => {
    const [animation, setAnimation] = React.useState(false);
    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }, 4000);
    }, [])

    return (
        <Box zIndex={100} style={{
            transform: animation ? 'translateY(0px)' : 'translateY(-100px)',
            transition: 'transform 500ms cubic-bezier(0.42, 0, 0, 1)',
            willChange: 'transform',
        }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="1"
                pl="1"
                style={{ width: window.innerWidth, height: 60, position: 'fixed', left: 0, backgroundColor: '#668473e6' }}>
                <LogoSVG height={50} width={50} />
                <Box flexGrow={1} />
                {links.map((link, index) => (
                    <>
                        <NavLink to={link.url}>
                            <Text fontWeight="300" onClick={() => props.setPage(link.next || index)}>{link.title}</Text>
                        </NavLink>
                        <Box flexGrow={1} />
                    </>
                ))}
            </Box>
        </Box>

    )
}