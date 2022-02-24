import React from "react";
import { Badge, Box, Image, IconButton, ScaleFade } from "@chakra-ui/react";
import { GoLinkExternal } from "react-icons/go";
import { BiMap } from "react-icons/bi";

export const CardFooter = (props: {
  onClickMap?(): void;
  onClickLink(): void;
}) => (
  <Box
    paddingTop="5"
    display="flex"
    justifyContent="flex-end"
    position="relative"
  >
    {props.onClickMap && (
      <IconButton
        onClick={props.onClickMap}
        marginRight="2"
        size="sm"
        aria-label="external"
        icon={<BiMap />}
      />
    )}
    <IconButton
      onClick={props.onClickLink}
      size="sm"
      aria-label="external"
      icon={<GoLinkExternal />}
    />
  </Box>
);

export const Card = (props: {
  boxSize?: string;
  title: string;
  description?: React.ReactNode;
  badge?: string;
  imageSrc: string;
  children?: React.ReactNode;
  hoverStyle?: any;
  onClick?(): void;
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <Box
        onClick={props.onClick}
      _hover={{...props.hoverStyle}}
      transition="box-shadow 200ms ease-in-out"
      minHeight="200px"
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin="2"
      backgroundColor="white"
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <ScaleFade initialScale={0.9} in={isLoaded}>
        <Image
          onLoad={() => {
            setIsLoaded(true);
          }}
          minHeight="280px"
          maxHeight="280px"
          minW="sm"
          objectFit="cover"
          boxSize={props.boxSize}
          src={props.imageSrc}
        />
      </ScaleFade>

      <Box p="6" display="flex" flexGrow={1} flexDir="column" minW="100%">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="gray">
            {props.badge}
          </Badge>
        </Box>

        <Box display="flex" alignItems="baseline" flexDir="column">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.title}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {props.description}
          </Box>
        </Box>
        <Box flex={1} />
        {props.children}
      </Box>
    </Box>
  );
};
