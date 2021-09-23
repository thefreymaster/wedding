import { Box, Text } from '@chakra-ui/react';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants';
import { ArrowDown } from '../../common/ArrowDown/index';

export const When = (props: {
    page: number
}) => {
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
            <Box p="1">
                <Text color={SECONDARY_COLOR} fontSize="1xl" fontWeight="300"  letterSpacing="10px">WHEN</Text>
            </Box>
            <Box p="1">
                <Text color={PRIMARY_COLOR} fontSize="6xl" fontWeight="200" letterSpacing="20px">JULY 3RD, 2022</Text>
            </Box>
            <ArrowDown heightModifier="130%" />
        </Box>
    )
}