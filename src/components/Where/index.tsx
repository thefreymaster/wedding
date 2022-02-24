import { Box, Text } from '@chakra-ui/react';
import { DARK_PRIMARY, SECONDARY_COLOR } from '../../constants';
import { PrimaryButton } from '../../common/Buttons/index';

export const Where = () => {
    return (
        <Box style={{
            width: 'calc(100vw)',
            height: '50vh',
        }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
        >
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="500" letterSpacing="10px">WHERE</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="4xl" fontWeight="700" letterSpacing="2px" textAlign="center">COMMONWEATH CAMBRIDGE</Text>
            </Box>
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="sm" fontWeight="300" textAlign="center">11 BROAD CANAL WAY, CAMBRIDGE, MA 02142</Text>
            </Box>
            <Box p="1" />
            <PrimaryButton variant="solid" onClick={() => {
                window.open('https://goo.gl/maps/uaTk52WcF3aSBTNv6', '_blank');
            }}>
                Open in Google Maps
            </PrimaryButton>
        </Box >
    )
}