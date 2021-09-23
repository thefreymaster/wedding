import { AiOutlineArrowDown } from 'react-icons/ai';
import { Box } from '@chakra-ui/react';
import './arrow-down.css';

export const ArrowDown = (props: any) => {
    return (
        <Box style={{
            position: 'relative',
            bottom: `calc(100vh - ${props.heightModifier})`
        }}
            className="bounce"
        >
            <AiOutlineArrowDown />
        </Box>
    )
}