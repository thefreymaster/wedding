import React from 'react';
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Divider,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Tag,
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import { useQuery } from 'react-query';

interface IAttendee {
    name: string;
    attending: boolean;
    hasPlusOne: boolean;
    plusOneName: string;
    createdDate?: string;
}

export const Attendees = () => {
    const [count, setCount]: any = React.useState();

    const { isLoading, data: attendees } = useQuery('attendeeData', () =>
        fetch('https://elizabeth-and-evan-wedding-default-rtdb.firebaseio.com/attendees.json').then(res =>
            res.json()
        )
    );

    React.useLayoutEffect(() => {
        let _count = 0;
        if (!isLoading) {
            Object.entries(attendees || []).map(([key, value]: [key: string, value: any]) => {
                _count = _count + 1;
                if (value.hasPlusOne) {
                    _count = _count + 1
                }
                setCount(_count);
            })
        }
    }, [isLoading, attendees])

    const checkForDuplicates = (name: string, collection: Array<any>) => {
        let count = 0;
        collection.forEach(([key, value]) => {
            if (name === value.name) {
                count++;
            }
            if (name === value.plusOneName) {
                count++;
            }
        })
        if (count > 1) {
            return true
        }
        return false;
    }

    if (isLoading) {
        return "Loading"
    }
    return (
        <Box style={{
            width: 'calc(100vw)',
            height: '100vh',
        }}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            flexDir="column"
            marginTop="100px"
        >
            <Box padding="30px 30px 20px 30px" display="flex" alignItems="center" border="1px solid #edf2f7" borderRadius="10px">
                <Stat>
                    <StatLabel>Total Attendees</StatLabel>
                    <StatNumber>{count}</StatNumber>
                    <StatHelpText>Confirmed as of {new Date().toDateString()}</StatHelpText>
                </Stat>
            </Box>
            <Box p="5" />
            <Box minW={isMobile ? "90%" : "70%"}>

                <Table variant="simple" colorScheme="gray" size="sm">
                    <TableCaption>All Attendees including plus ones</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Attendee</Th>
                            <Th>Attending</Th>
                            <Th>Has Plus One</Th>
                            <Th>Plus One Name</Th>
                            {!isMobile && <Th>Date Confirmed</Th>}
                            {!isMobile && <Th>Duplicate</Th>}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.entries(attendees || []).map(([key, value]: [key: string, value: any]) => {
                            return (
                                <Tr>
                                    <Td>{value.name}</Td>
                                    <Td>{value.attending ? <Tag size="sm" colorScheme="green">YES</Tag> : <Tag size="sm" >No</Tag>}</Td>
                                    <Td>{value.hasPlusOne ? <Tag size="sm" colorScheme="green">YES</Tag> : <Tag size="sm">No</Tag>}</Td>
                                    <Td>{value.plusOneName}</Td>

                                    {!isMobile && <Td>{new Date(value.createdDate).toLocaleDateString('en-US')} {new Date(value.createdDate).toLocaleTimeString('en-US')}</Td>}
                                    {!isMobile &&
                                        <Td>{checkForDuplicates(value.name, Object.entries(attendees)) ? <Tag size="sm" colorScheme="red">YES</Tag> : <Tag size="sm">No</Tag>}</Td>
                                    }
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    )
}