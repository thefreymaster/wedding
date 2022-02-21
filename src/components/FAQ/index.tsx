import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { DARK_PRIMARY, PRIMARY_COLOR } from "../../constants";
import { Wrapper } from "../../common/Wrapper";
import { isMobile } from "react-device-detect";

const events = [
  // {
  //     title: "Where",
  //     blurb: "The ceremony and the reception will both take place at Commonwealth, 11 Broad Canal Way"
  // },
  {
    title: "Health & Safety",
    blurb:
      "We will require all guests attending our wedding be fully vaccinated against COVID-19.  We must prioritize the health and safety of our friends and family at this time.  Thank you for understanding and respecting our wishes.",
  },
  {
    title: "What to Wear",
    blurb:
      "Cocktail attire is welcome, but wear what makes you comfortable!  It's summer in New England, don't forget a light jacket.",
  },
  {
    title: "Where is the Wedding and Reception?",
    blurb: "Commonwealth, 11 Broad Canal Way, Cambridge, MA 02142",
  },
  {
    title: "Where is the Welcome Reception?",
    blurb: "Russell House Tavern, 14 John F. Kennedy St, Cambridge, MA 02138",
  },
  {
    title: "Transportation",
    blurb:
      "Both hotels are under a 5 minute walk from the venue. No need to rent a car if you fly in! Boston and Cambridge are very walkable. The city also has Uber, the subway and blue bikes.",
  },
  {
    title: "Children",
    blurb:
      "Please note that this will be an adults only wedding and reception.",
  },
];

const FAQ = () => {
  return (
    <Wrapper in>
      <Box display="flex" flexDir="column" justifyContent="center">
        <Text
          color={DARK_PRIMARY}
          fontSize={isMobile ? "2xl" : "6xl"}
          fontWeight="700"
          letterSpacing={isMobile ? "2px" : "5px"}
        >
          FAQ
        </Text>
      </Box>
      {events.map((event) => (
        <Box
          display="flex"
          flexDir="column"
          minH="40px"
          marginBottom="20"
          maxW={isMobile ? "90%" : "50%"}
          minW={isMobile ? "90%" : "50%"}
        >
          <Box display="flex" flexDir="column" justifyContent="center">
            <Text
              color={PRIMARY_COLOR}
              fontSize="1xl"
              fontWeight="500"
              letterSpacing="2px"
            >
              {event.title}
            </Text>
          </Box>
          <Box
            paddingRight="10"
            paddingTop="2"
            marginBottom="2"
            borderBottom="2px solid #b6c4bc"
          />
          <Box display="flex" flexDir="column" justifyContent="center">
            <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500">
              {event.blurb}
            </Text>
          </Box>
        </Box>
      ))}
    </Wrapper>
  );
};

export default FAQ;
