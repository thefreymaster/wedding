import { Box, Link, Text } from "@chakra-ui/layout";
import { DARK_PRIMARY, SECONDARY_COLOR } from "../../constants";
import { IconButton, Tag, Tooltip } from "@chakra-ui/react";
import { IoMdMap } from "react-icons/io";

const events = [
  {
    time: "5:00pm - 7:00pm, July 2nd",
    title: "Welcome Reception",
    description:
      "We're inviting all of our guests on Saturday evening to join us for an early celebration",
    business: "Russell House Tavern",
    address: "14 John F. Kennedy St, Cambridge, MA 02138",
    url: "https://g.page/russellhousetav?share",
  },
  {
    time: "5:00pm July 3rd",
    title: "Ceremony",
    description: "Elizabeth & Evan tie the knot",
    business: "Commonwealth",
    address: "Second Floor, 11 Broad Canal Way, Cambridge, MA 02142",
    url: "https://goo.gl/maps/LkPR2UrTGSKKM5iMA",
  },
  {
    time: "5:30pm - 6:30pm",
    title: "Cocktail Hour",
    business: "Commonwealth",
    description: "Enjoy a drink downstairs after the ceremony",
    address: "Main Tent, 11 Broad Canal Way, Cambridge, MA 02142",
  },
  {
    time: "6:30pm - 10:00pm",
    title: "Reception",
    business: "Commonwealth",
    description: "All wedding attendees ready to dance & party",
    address: "Main Reception, 11 Broad Canal Way, Cambridge, MA 02142",
  },
];

const Title = () => (
  <Text
    textAlign="center"
    pb="5"
    pt="20"
    color={SECONDARY_COLOR}
    fontSize="1xl"
    fontWeight="500"
    letterSpacing="10px"
  >
    Schedule
  </Text>
);

const Schedule = () => {
  // if (isMobile) {
  return (
    <Box display="flex" flexDir="column" paddingBottom="20">
      <Title />
      {events.map((event) => (
        <Box
          display="flex"
          flexDir="column"
          minH="100px"
          margin="20px 20px 0px 20px"
          padding="20px"
          border="0px solid #0000001a"
          boxShadow="inner"
          borderRadius="8px"
          backgroundColor="white"
        >
          <Box
            marginLeft="10"
            paddingRight="10"
            borderLeft="2px solid #b6c4bc"
          />
          <Box display="flex" flexDir="column" justifyContent="center">
            <Box display="flex" flexDir="row" marginBottom="2">
              <Box display="flex" alignItems="flex-end">
                <Text color={DARK_PRIMARY} fontSize="2xl" fontWeight="900">
                  {event.title}
                </Text>
              </Box>
              <Box display="flex" flexGrow={1} />
              <Tag size="md">
                <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">
                  {event.time}
                </Text>
              </Tag>
              {event?.url && (
                <Tooltip label='Map Directions'>
                  <IconButton
                    size="md"
                    href={event?.url}
                    target="_blank"
                    ml="2"
                    aria-label="map"
                    as="a"
                    icon={<IoMdMap />}
                  />
                </Tooltip>
              )}
            </Box>
            <Box>
              <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">
                {event.description}
              </Text>
            </Box>
            <Box mt="2" pt="2" borderTop="2px dotted" borderTopColor="gray.200">
              <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">
                {event.business}
              </Text>
            </Box>
            <Box>
              <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="300" as="i">
                {event.address}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
  // }
  return (
    <Box display="flex" flexDir="column" paddingBottom="20">
      <Title />
      {events.map((event) => (
        <Box display="flex" flexDir="row" minH="100px" marginBottom="20">
          <Box display="flex" flexDir="column" justifyContent="center">
            <Text
              color={DARK_PRIMARY}
              fontSize="1xl"
              fontWeight="500"
              letterSpacing="10px"
            >
              {event.time}
            </Text>
          </Box>
          <Box
            marginLeft="10"
            paddingRight="10"
            borderLeft="2px solid #b6c4bc"
          />
          <Box display="flex" flexDir="column" justifyContent="center">
            <Box display="flex" alignItems="flex-end">
              <Text
                color={DARK_PRIMARY}
                fontSize="1xl"
                fontWeight="900"
                letterSpacing="5px"
              >
                {event.title}
              </Text>
            </Box>
            <Box>
              <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">
                {event.description}
              </Text>
            </Box>
            <Box>
              <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">
                {event.address}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Schedule;
