import { Box, Text } from "@chakra-ui/layout";
import { SECONDARY_COLOR } from "../../constants";

export const Legal = () => {
  return (
    <Box>
      <Text
        color={SECONDARY_COLOR}
        paddingBottom="4"
        fontSize="small"
        fontWeight="500"
        letterSpacing="2px"
      >
        Designed by Evan & Elizabeth. Copyright 2022.
      </Text>
    </Box>
  );
};
