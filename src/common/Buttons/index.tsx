import { Button, Text } from '@chakra-ui/react';
import { PRIMARY_COLOR } from '../../constants';

export const PrimaryButton = (props: {
    children: string;
    variant?: 'solid' | 'ghost' | 'outline',
    onClick?(): void;
    disabled?: boolean;
    style?: any;
    isLoading?: boolean;
}) => {
    return (
        <Button colorScheme="gray" variant={props.variant || 'solid'} {...props}>
            <Text color={PRIMARY_COLOR} fontSize="sm" fontWeight="500" letterSpacing="2px">{props.children}</Text>
        </Button>
    )
}