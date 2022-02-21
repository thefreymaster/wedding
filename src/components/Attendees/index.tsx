import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Tfoot,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Tag,
  Spinner,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useQuery } from "react-query";

interface IAttendee {
  name: string;
  attending: boolean;
  hasPlusOne: boolean;
  plusOneName: string;
  createdDate?: string;
}

const Attendees = () => {
  const [count, setCount]: any = React.useState();
  const [invites, setInvites]: any = React.useState(0);

  const { isLoading, data: attendees } = useQuery("attendeeData", () =>
    fetch(
      "https://elizabeth-and-evan-wedding-default-rtdb.firebaseio.com/attendees.json"
    ).then((res) => res.json())
  );

  React.useLayoutEffect(() => {
    let _count = 0;
    let _invites = 0;

    if (!isLoading) {
      Object.entries(attendees || []).map(
        ([key, value]: [key: string, value: any]) => {
          if (value.isAttending) {
            console.log(value);
            _count = _count + 1;
          }
          if (value.hasPlusOneAttending) {
            console.log(value);
            _count = _count + 1;
          }
          setCount(_count);
        }
      );
      Object.entries(attendees || []).forEach(
        ([, value]: [key: string, value: any]) => {
          _invites = _invites + value?.partySize;
        }
      );
      setInvites(_invites);
    }
  }, [isLoading, attendees]);

  const getIsAttendingStatus = (value: any) => {
    if (!value?.confirmedOn) {
      return null;
    }
    if (value.isAttending) {
      return (
        <Tag size="sm" colorScheme="green">
          YES
        </Tag>
      );
    }
    return <Tag size="sm">No</Tag>;
  };

  const getIsAttendingPlusOneStatus = (value: any) => {
    if (!value?.confirmedOn) {
      return null;
    }
    if (value.hasPlusOneAttending) {
      return (
        <Tag size="sm" colorScheme="green">
          YES
        </Tag>
      );
    }
    return <Tag size="sm">No</Tag>;
  };

  const getIsAttendingWelcomeStatus = (value: any) => {
    if (!value?.confirmedOn) {
      return null;
    }
    if (value.isAttendingWelcome) {
      return (
        <Tag size="sm" colorScheme="green">
          YES
        </Tag>
      );
    }
    return <Tag size="sm">No</Tag>;
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Box
      style={{
        width: "calc(100vw)",
        height: "100vh",
      }}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDir="column"
      marginTop="100px"
    >
      <Box p="5" />
      <Box display="flex" alignItems="center" flexDir="row">
        <Box
          padding="30px 30px 20px 30px"
          display="flex"
          alignItems="center"
          border="1px solid #edf2f7"
          borderRadius="10px"
          boxShadow="inner"
          flexDir="row"
          marginRight="4"
        >
          <Stat>
            <StatLabel>Invited Attendees</StatLabel>
            <StatNumber fontSize="4xl">{invites}</StatNumber>
            <StatHelpText>
              Verified as of {new Date().toDateString()}
            </StatHelpText>
          </Stat>
        </Box>
        <Box
          padding="30px 30px 20px 30px"
          display="flex"
          alignItems="center"
          border="1px solid #edf2f7"
          borderRadius="10px"
          boxShadow="inner"
          flexDir="row"
          marginRight="4"
        >
          <Stat>
            <StatLabel>Welcome Attendees</StatLabel>
            <StatNumber fontSize="4xl">{count}</StatNumber>
            <StatHelpText>
              Confirmed as of {new Date().toDateString()}
            </StatHelpText>
          </Stat>
        </Box>
        <Box
          padding="30px 30px 20px 30px"
          display="flex"
          alignItems="center"
          border="1px solid #edf2f7"
          borderRadius="10px"
          boxShadow="inner"
        >
          <Stat>
            <StatLabel>Reception Attendees</StatLabel>
            <StatNumber fontSize="4xl">{count}</StatNumber>
            <StatHelpText>
              Confirmed as of {new Date().toDateString()}
            </StatHelpText>
          </Stat>
        </Box>
      </Box>
      <Box p="5" />
      <Box minW={isMobile ? "90%" : "70%"}>
        <Table variant="striped" colorScheme="gray" size="sm">
          <TableCaption>All Attendees including plus ones</TableCaption>
          <Thead>
            <Tr>
              <Th>Attendees</Th>
              <Th>Attending</Th>
              <Th>Attending Plus One</Th>
              <Th>Attending Welcome</Th>
              <Th>Has Plus One</Th>
              {!isMobile && <Th>Confirmed On</Th>}
              <Th>Party Size</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(attendees || []).map(
              ([key, value]: [key: string, value: any]) => {
                return (
                  <Tr key={key}>
                    <Td>{value.prettyName}</Td>
                    <Td>{getIsAttendingStatus(value)}</Td>
                    <Td>{getIsAttendingPlusOneStatus(value)}</Td>
                    <Td>{getIsAttendingWelcomeStatus(value)}</Td>
                    <Td>
                      {value.hasPlusOne ? (
                        <Tag size="sm" colorScheme="green">
                          YES
                        </Tag>
                      ) : (
                        <Tag size="sm">NO</Tag>
                      )}
                    </Td>
                    {!isMobile && (
                      <Td>
                        {value?.confirmedOn &&
                          new Date(value.confirmedOn).toLocaleDateString(
                            "en-US"
                          )}{" "}
                        {value?.confirmedOn &&
                          new Date(value.confirmedOn).toLocaleTimeString(
                            "en-US"
                          )}
                      </Td>
                    )}
                    <Td>{value.partySize}</Td>
                  </Tr>
                );
              }
            )}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Attendees</Th>
              <Th>Attending</Th>
              <Th>Attending Plus One</Th>
              <Th>Attending Welcome</Th>
              <Th>Has Plus One</Th>
              {!isMobile && <Th>Confirmed On</Th>}
              <Th>Party Size</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </Box>
  );
};

export default Attendees;
