import React, { useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import { LogoLottie } from "../../common/Logo";
import JSON from "../../lottie/flutes.json";
import { SECONDARY_COLOR, DARK_PRIMARY } from "../../constants";
import "./welcome.css";
import classNames from "classnames";
import { isDesktop, isMobile } from "react-device-detect";
import Schedule from "../Schedule";
import { Legal } from "../Legal";
import { ArrowDown } from "../../common/ArrowDown";

const Welcome = () => {
  const ref = useRef();
  const [animate, setAnimate] = React.useState(false);
  const [animate2, setAnimate2] = React.useState(false);
  const [animate4, setAnimate4] = React.useState(false);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 3000);
    setTimeout(() => {
      setAnimate2(true);
    }, 2000);
    setTimeout(() => {
      setAnimate4(true);
    }, 4000);
  }, []);

  return (
    <Box>
      <Box
        style={{
          width: "calc(100vw)",
        }}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexDir="column"
        marginTop="100px"
      >
        <Box
          minH="calc(100vh - 60px)"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexDir="column"
        >
          <LogoLottie
            scale="scale(2)"
            height={isMobile ? 150 : 250}
            width={isMobile ? 180 : 250}
            play
            json={JSON}
            style={{ marginLeft: -25 }}
          />
          <Box
            p="1"
            className={classNames({
              "fade-in": animate2,
              invisible: !animate2,
            })}
          >
            <Text
              color={SECONDARY_COLOR}
              fontSize="1xl"
              fontWeight="300"
              letterSpacing={isMobile ? "5px" : "10px"}
            >
              WE'RE GETTING MARRIED!
            </Text>
          </Box>
          <Box
            p="1"
            className={classNames({ "fade-in": animate, invisible: !animate })}
          >
            {isMobile ? (
              <Box display="flex" flexDir="column" alignItems="center" paddingTop="10">
                <Text
                  color={DARK_PRIMARY}
                  fontSize={isMobile ? "3xl" : "6xl"}
                  fontWeight="700"
                  letterSpacing={isMobile ? "2px" : "5px"}
                >
                  ELIZABETH
                </Text>
                <Text
                  color={DARK_PRIMARY}
                  fontSize={isMobile ? "3xl" : "6xl"}
                  fontWeight="700"
                  letterSpacing={isMobile ? "2px" : "5px"}
                >
                  &
                </Text>
                <Text
                  color={DARK_PRIMARY}
                  fontSize={isMobile ? "3xl" : "6xl"}
                  fontWeight="700"
                  letterSpacing={isMobile ? "2px" : "5px"}
                >
                  EVAN
                </Text>
              </Box>
            ) : (
              <Text
                color={DARK_PRIMARY}
                fontSize={isMobile ? "2xl" : "6xl"}
                fontWeight="700"
                letterSpacing={isMobile ? "2px" : "5px"}
              >
                ELIZABETH & EVAN
              </Text>
            )}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDir={isMobile ? "column" : "row"}
            alignItems="center"
            paddingTop="10"
          >
            <Box
              p="1"
              className={classNames({
                "fade-in": animate4,
                invisible: !animate4,
              })}
            >
              <Text
                textAlign="center"
                color={SECONDARY_COLOR}
                fontSize={isMobile ? "1xl" : "2xl"}
                fontWeight="500"
                letterSpacing="10px"
              >
                JULY 3RD, 2022
              </Text>
            </Box>
            <Box
              className={classNames({
                "fade-in": animate4,
                invisible: !animate4,
              })}
              borderRight={isDesktop ? "2px solid #b6c4bc" : "0px"}
              borderBottom={isMobile ? "2px solid #b6c4bc" : "0px"}
              minH={isMobile ? "0px" : "100px"}
              minW={isMobile ? "75vw" : ""}
              margin={isMobile ? "15px" : "0px 15px"}
            />
            <Box
              p="1"
              className={classNames({
                "fade-in": animate4,
                invisible: !animate4,
              })}
            >
              <Text
                textAlign="center"
                color={SECONDARY_COLOR}
                fontSize={isMobile ? "1xl" : "2xl"}
                fontWeight="500"
                letterSpacing="10px"
              >
                CAMBRIDGE, MA
              </Text>
            </Box>
          </Box>
          <ArrowDown ref={ref} bottomFixed animate={animate4} />
        </Box>
        <Box flexGrow={1} />
        <Box className={classNames({ "fade-in": true })}>
          <Schedule ref={ref} />
        </Box>
        <Legal />
      </Box>
    </Box>
  );
};

export default Welcome;
