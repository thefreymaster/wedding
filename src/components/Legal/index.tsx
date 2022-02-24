import { Box, Text } from "@chakra-ui/layout";
import { SECONDARY_COLOR } from "../../constants";
import { isMobile } from 'react-device-detect';

export const Legal = () => {
  return (
    <Box position="absolute" bottom="0px" left="50px">
      <Text
        color={SECONDARY_COLOR}
        paddingBottom="4"
        fontSize={isMobile ? "xs" : "sm"}
        fontWeight="500"
        letterSpacing="2px"
      >
        Designed by Evan & Elizabeth. Copyright 2022.
      </Text>
    </Box>
  );
};
