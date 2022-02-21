import { Box, Code, Text } from "@chakra-ui/react";
import { AIRBNB_CAMBRIDGE_LINK, DARK_PRIMARY } from "../../constants";
import { ArrowDown } from "../../common/ArrowDown/index";
import { PrimaryButton } from "../../common/Buttons/index";
import { Skyline } from "../../common/SVG";
import { isMobile } from "react-device-detect";
import { Wrapper } from "../../common/Wrapper";
import { Card, CardFooter } from "../Attractions";

const Description = (props: {
  address?: string;
  children?: React.ReactNode;
}) => (
  <Box display="flex" alignItems="flex-start" flexDir="column" marginTop="4">
    <Text
      color={DARK_PRIMARY}
      fontSize="sm"
      fontWeight="500"
      textAlign="center"
    >
      {props.children}
    </Text>
    <Text
      color={DARK_PRIMARY}
      fontSize="sm"
      fontWeight="300"
      as="i"
      textAlign="center"
    >
      {props.address}
    </Text>
  </Box>
);

const Lodging = () => {
  return (
    <Wrapper in justifyContent="flex-start">
      <Box display="flex" flexDir={isMobile ? "column" : "row"}>
        <Card
          boxSize="300px"
          title="THE KENDALL HOTEL"
          description={
            <Description address="350 Main St, Cambridge, MA 02142">
              <Box
                paddingBottom="3"
                display="flex"
                flexDir="column"
                justifyContent="flex-start"
              >
                <Box textAlign="left">
                  Use promo code: <Code>BFWG</Code>
                </Box>
              </Box>
            </Description>
          }
          badge="LODGING"
          imageSrc="https://elizabethandevan.s3.amazonaws.com/kendall.jpeg"
        >
          <CardFooter
            onClickLink={() =>
              window.open("https://kendallhotel.com/", "_blank")
            }
            onClickMap={() =>
              window.open("https://goo.gl/maps/XYLyBNvP2bZ9eDcXA", "_blank")
            }
          />
        </Card>
        <Card
          boxSize="300px"
          title="BOSTON MARRIOTT CAMBRIDGE"
          description={
            <Description address="50 Broadway, Cambridge, MA 02142">
              <Box
                paddingBottom="3"
                display="flex"
                flexDir="column"
                justifyContent="flex-start"
              >
                <Box textAlign="left" mb="2">
                  <Code>BFWBFWA</Code> (For a King Bed)
                </Box>
                <Box textAlign="left">
                  <Code>BFWBFWD</Code> (For 2 Queen Beds)
                </Box>
              </Box>
            </Description>
          }
          badge="LODGING"
          imageSrc="https://elizabethandevan.s3.amazonaws.com/marriott.jpeg"
        >
          <CardFooter
            onClickLink={() =>
              window.open(
                "https://www.marriott.com/hotels/travel/boscb-boston-marriott-cambridge/",
                "_blank"
              )
            }
            onClickMap={() =>
              window.open(
                "https://www.google.com/maps/place/Boston+Marriott+Cambridge/@42.3631098,-71.0857094,15z/data=!4m10!3m9!1s0x0:0x9179247fafa0ddf8!5m4!1s2022-07-01!2i3!4m1!1i2!8m2!3d42.3631098!4d-71.0857094",
                "_blank"
              )
            }
          />
        </Card>
        <Card
          boxSize="300px"
          title="AIRBNB"
          description={<Description address="Explore Cambridge with Airbnb" />}
          badge="LODGING"
          imageSrc="https://elizabethandevan.s3.amazonaws.com/cambridge.jpeg"
        >
          <CardFooter
            onClickLink={() => window.open(AIRBNB_CAMBRIDGE_LINK, "_blank")}
          />
        </Card>
      </Box>
    </Wrapper>
  );
};

export default Lodging;
