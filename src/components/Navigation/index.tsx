import React from 'react';
import {
    Box, IconButton, Text, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LogoSVG } from '../../common/Logo';
import { SCROLL_ROUTES } from '../../constants';
import { isBrowser, isMobile } from 'react-device-detect';
import { AiOutlineMenu } from 'react-icons/ai';

export const Navigation = (props: {
    page: number;
    setPage(index: number): void;
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()

    const location: any = useLocation();
    const [animation, setAnimation] = React.useState(location.pathname === '/' ? false : true);
    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }, 0);
    }, []);

    return (
        <Box zIndex={100} style={{
            transform: animation ? 'translateY(0px)' : 'translateY(-100px)',
            transition: 'transform 500ms cubic-bezier(0.42, 0, 0, 1)',
            willChange: 'transform',
            width: '100vw',
            height: 60,
            position: 'fixed',
            left: 0,
            backgroundColor: '#668473',
            backdropFilter: 'blur(8px)',
        }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="1"
                pl="1"
            >
                <NavLink to="/">
                    <LogoSVG height={50} width={50} />
                </NavLink>
                <Box flexGrow={1} />
                {isBrowser && (
                    <>
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
                        <a target="_blank" rel="noopener noreferrer" href="https://www.zola.com/registry/elizabethandevanjuly3">
                            <Text _hover={{ color: 'whiteAlpha.900' }} fontSize="small" color="whiteAlpha.900">REGISTRY</Text>
                        </a>
                        <Box flexGrow={1} />
                    </>
                )}
                {isMobile && (
                    <IconButton onClick={onOpen} mr="2" aria-label="Search database" icon={<AiOutlineMenu />} />
                )}
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader></DrawerHeader>

                        <DrawerBody>
                            {SCROLL_ROUTES.map((item: any) => {
                                return (
                                    <>
                                        <Link to={item.route} onClick={onClose}>
                                            <Text
                                                p={isMobile ? '3' : '0'}
                                                _hover={{ color: isMobile ? 'gray.900' : 'whiteAlpha.900' }}
                                                fontWeight={location.pathname.includes(item.route) ? "700" : "500"}
                                                fontSize={isMobile ? "large" : "small"}
                                                color={isMobile ? "gray.500" : "whiteAlpha.800"}>
                                                {item.title.toUpperCase()}
                                            </Text>
                                        </Link>
                                        <Box flexGrow={1} />
                                    </>
                                )
                            })}
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>

    )
}