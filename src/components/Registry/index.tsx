import { Box, Divider, Text } from '@chakra-ui/react';
import { Skyline } from '../../common/SVG';
import { isMobile } from 'react-device-detect';

export const Registry = () => {
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
            <Box minW={isMobile ? "90%" : "40%"}>
                <Text fontSize="4xl">REGISTRY</Text>
                <Box p="2" />
                <Divider />
                <Box p="2" />     
            </Box>
            <Skyline timing={200} />
        </Box>
    )
}