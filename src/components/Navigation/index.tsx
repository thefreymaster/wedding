import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { LogoSVG } from '../../common/Logo';
import { SCROLL_ROUTES } from '../../constants';

const links = [{
    title: 'Home',
    url: '/',
    next: 1
}, {
    title: 'E & E',
    url: '/eande',
    next: 2
}, {
    title: 'Where',
    url: '/where',
    next: 7
}, {
    title: 'When',
    url: '/when',
    next: 8
}, {
    title: 'Join',
    url: '/join-us',
    next: 9
}, {
    title: 'Registry',
    url: '/registry',
    next: 10
},]

export const Navigation = (props: {
    page: number;
    setPage(index: number): void;
}) => {
    const location: any = useLocation();
    console.log(location);
    const [animation, setAnimation] = React.useState(location.pathname === '/' ? false : true);
    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }, 5000);
    }, [])

    return (
        <Box zIndex={100} style={{
            transform: animation ? 'translateY(0px)' : 'translateY(-100px)',
            transition: 'transform 500ms cubic-bezier(0.42, 0, 0, 1)',
            willChange: 'transform',
            width: '100vw',
            height: 60,
            position: 'fixed',
            left: 0,
            backgroundColor: '#668473e6',
            backdropFilter: 'blur(8px)',
        }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="1"
                pl="1"
            >
                <LogoSVG height={50} width={50} />
                <Box flexGrow={1} />
                {SCROLL_ROUTES.map((item: any) => {
                    return (
                        <>
                            <Link to={item.route}>
                                <Text _hover={{ color: 'whiteAlpha.900' }} fontWeight={location.pathname === item.route ? "700" : "500"} fontSize="small" color={location.pathname === item.route ? "whiteAlpha.900" : "whiteAlpha.800"}>{item.title.toUpperCase()}</Text>
                            </Link>
                            <Box flexGrow={1} />
                        </>
                    )
                })}
            </Box>
        </Box>

    )
}