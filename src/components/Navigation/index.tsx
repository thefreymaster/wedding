import React from 'react';
import { Box, Slide } from '@chakra-ui/react';
import { LogoSVG } from '../Logo';

export const Navigation = () => {
    const [animation, setAnimation] = React.useState(false);
    React.useLayoutEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }, 4000);
    }, [])

    return (
        <Box zIndex={100}>
            {/* <Slide direction="left" in={animation}> */}
                <Box
                    display="flex"
                    justifyContent="center"
                    pt="6"
                    style={{ width: 60, height: window.innerHeight, position: 'fixed', left: 0, backgroundColor: '#668473e6' }}>
                    <LogoSVG height={50} width={50} />
                </Box>
            {/* </Slide> */}
        </Box>

    )
}