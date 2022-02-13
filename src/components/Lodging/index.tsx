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
      fontWeight="500"
      textAlign="center"
    >
      {props.address}
    </Text>
  </Box>
);

export const Lodging = () => {
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
                <Box textAlign="left">
                  Use promo code: <Code>BFWG</Code>
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
      {/* <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="1xl" fontWeight="500" letterSpacing="10px">LODGING</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "3xl"} fontWeight="700" letterSpacing="2px" textAlign="center">THE KENDALL HOTEL</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">Use promo code: <Code>BFWG</Code></Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">350 Main St, Cambridge, MA 02142</Text>
            </Box>

            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">
                    <a href="tel:+16175771300">+1 617-577-1300</a>
                </Text>
            </Box>
            <PrimaryButton variant="solid" onClick={() => {
                window.open('https://goo.gl/maps/XYLyBNvP2bZ9eDcXA', '_blank');
            }}>
                Open in Google Maps
            </PrimaryButton>

            <Box p="5" />
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "3xl"} fontWeight="700" letterSpacing="1px" textAlign="center">BOSTON MARRIOTT CAMBRIDGE</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">50 BROADWAY, CAMBRIDGE, MA 02142</Text>
            </Box>
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize="sm" fontWeight="500" textAlign="center">
                    <a href="tel:+16174946600">+1 617-494-6600</a>
                </Text>
            </Box>
            <PrimaryButton variant="solid" onClick={() => {
                window.open('https://goo.gl/maps/wjUzH9jx8gTfzA6x7', '_blank');
            }}>
                Open in Google Maps
            </PrimaryButton>

            <Box p="1" />

            <Box p="5" />
            <Box p="1">
                <Text color={DARK_PRIMARY} fontSize={isMobile ? "2xl" : "3xl"} fontWeight="700" letterSpacing="1px" textAlign="center">AIRBNB</Text>
            </Box>
            <Box p="1" />

            <PrimaryButton variant="solid" onClick={() => {
                window.open(AIRBNB_CAMBRIDGE_LINK, '_blank');
            }}>
                Airbnb Cambridge
            </PrimaryButton> */}
    </Wrapper>
  );
};
