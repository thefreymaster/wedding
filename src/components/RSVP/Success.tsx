import { isMobile } from "react-device-detect";
import { DARK_PRIMARY } from "../../constants";
import { LogoLottie } from "../../common/Logo";
import CELEBRATE from "../../lottie/celebrate.json";
import { Wrapper } from "../../common/Wrapper";
import { Box, Fade, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const CONFIRMED = "You're Confirmed";
const NOW = "Now ";
const LETS = " Let's ";
const PARTY = " Party!";
const NOW_LETS_PARTY = "Now Let's Party!";

const Character = (props: {
  index: number;
  character: string;
  timing: number;
  setTiming(number: number): void;
}) => {
  const style = {
    "animation-delay": 0.5 + props.index / 10 + "s",
    fontFamily: "FakeSerif",
  };
  if (props.character === " ") {
    return <>&nbsp;</>;
  }

  return (
    <Fade in>
      <Text
        style={style}
        className="text"
        animation="animation: move-text 0.75s forwards;"
        display="flex"
        flexDir="row"
        color={DARK_PRIMARY}
        fontSize={isMobile ? "64px" : "120px"}
        fontWeight="700"
        letterSpacing="2px"
      >
        {props.character}
      </Text>
    </Fade>
  );
};

const Success = () => {
  const [timing, setTiming] = React.useState(0);

  const location = useLocation();
  const history = useHistory();
  const { state }: any = location;

  if (!state?.success) {
    history.push("/rsvp");
  }

  if (isMobile) {
    return (
      <Wrapper in justifyContent="center">
        <Box maxW="90%" minW="90%" padding="8">
          <Box
            display="flex"
            flexDir={isMobile ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <LogoLottie
                loop={10000}
                json={CELEBRATE}
                play
                height={200}
                width={200}
              />
            </Box>
            <Box display="flex" flexDir="column" minW="50vw">
              <Box display="flex" alignItems="center" justifyContent="center">
                <Fade in>
                  <Text
                    style={{ fontFamily: "FakeSerif" }}
                    color={DARK_PRIMARY}
                    fontSize="1xl"
                    fontWeight="700"
                    letterSpacing="2px"
                  >
                    {CONFIRMED}
                  </Text>
                </Fade>
              </Box>
              <Box
                display="flex"
                flexDir={isMobile ? "column" : "row"}
                alignItems="center"
                justifyContent="center"
              >
                <Box display="flex" flexDir="row" marginRight="20px">
                  {NOW.split("").map((c, i) => (
                    <Character
                      index={i}
                      character={c}
                      timing={timing}
                      setTiming={setTiming}
                    />
                  ))}
                </Box>
                <Box display="flex" flexDir="row" paddingRight="2">
                  {LETS.split("").map((c, i) => (
                    <Character
                      index={i}
                      character={c}
                      timing={timing}
                      setTiming={setTiming}
                    />
                  ))}
                </Box>
                <Box display="flex" flexDir="row">
                  {PARTY.split("").map((c, i) => (
                    <Character
                      index={i}
                      character={c}
                      timing={timing}
                      setTiming={setTiming}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <LogoLottie
                loop={10000}
                json={CELEBRATE}
                play
                height={200}
                width={200}
              />
            </Box>
          </Box>
        </Box>
      </Wrapper>
    );
  }
  return (
    <Wrapper in justifyContent="center">
      <Box maxW="50%" minW="50%" padding="8">
        <Box
          display="flex"
          flexDir={isMobile ? "column" : "row"}
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <LogoLottie
              loop={10000}
              json={CELEBRATE}
              play
              height={200}
              width={200}
            />
          </Box>
          <Box display="flex" flexDir="column" minW="50vw">
            <Box display="flex" alignItems="center" justifyContent="center">
              <Fade in>
                <Text
                  style={{ fontFamily: "FakeSerif" }}
                  color={DARK_PRIMARY}
                  fontSize="2xl"
                  fontWeight="700"
                  letterSpacing="2px"
                >
                  {CONFIRMED}
                </Text>
              </Fade>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              {NOW_LETS_PARTY.split("").map((c, i) => (
                <Character
                  index={i}
                  character={c}
                  timing={timing}
                  setTiming={setTiming}
                />
              ))}
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <LogoLottie
              loop={10000}
              json={CELEBRATE}
              play
              height={200}
              width={200}
            />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Success;
