import { HiChevronDoubleDown } from "react-icons/hi";
import { Box, Fade } from "@chakra-ui/react";
import "./arrow-down.css";
import classNames from "classnames";
import { PRIMARY_COLOR } from "../../constants";
import { isMobile } from "react-device-detect";

export const ArrowDown = (props: {
  animate?: boolean;
  heightModifier?: string;
  children?: React.ReactNode;
  bottomFixed?: boolean;
  bottom?: string;
  ref: any;
}) => {
  return (
    <Box
      position={props.bottomFixed ? "absolute" : "inherit"}
      padding="20px"
      borderRadius="10px"
      top={
        props.bottomFixed ? `calc(100vh ${props.bottom ?? " - 80px"})` : "auto"
      }
      onClick={() =>
        window.scrollTo({
          top: window.innerHeight + (isMobile ? 100 : 30),
          left: 0,
          behavior: "smooth",
        })
      }
      _hover={{ cursor: "pointer" }}
    >
      <Box
        style={{
          position: "relative",
          bottom: `calc(100vh - ${props.heightModifier})`,
          fontSize: 32,
        }}
        className={classNames({ invisible: !props.animate })}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="row"
      >
        <Box margin="2">
          <Fade in={props.animate}>
            <Box
              className={classNames({
                bounce: props.animate,
                invisible: !props.animate,
              })}
            >
              <HiChevronDoubleDown color={PRIMARY_COLOR} />
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};
