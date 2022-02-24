import React from "react";
import classNames from "classnames";
import { Box } from "@chakra-ui/layout";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { getImage, getPictures } from "../../api";
import { ScaleFade, Image as ChakraImage, Spinner } from "@chakra-ui/react";

const Image = (props: { image: any }) => {
  const [imageUrl, setImageUrl] = React.useState("");
  const [displayImage, setDisplayImage] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useLayoutEffect(() => {
    const getImages = async () => {
      const url = await getImage(props.image.fullPath);
      setImageUrl(url);
      setTimeout(() => {
        setDisplayImage(true);
      }, 200);
    };
    getImages();
  }, []);

  if (!imageUrl) {
    return null;
  }
  return (
    <>
      {!isLoaded && (
        <Box
          boxSize="300px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner />
        </Box>
      )}
      <ScaleFade initialScale={0.9} in={isLoaded}>
        <ChakraImage
          onLoad={() => {
            setIsLoaded(true);
          }}
          className={classNames({
            "fade-in": displayImage,
            invisible: !displayImage,
          })}
          loading="lazy"
          border="1px solid #c9c9c9"
          borderRadius="4"
          margin="1"
          objectFit="cover"
          boxSize="300px"
          alt="image"
          src={imageUrl}
        />
      </ScaleFade>
    </>
  );
};

const shuffleArray = (array: any) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const Us = () => {
  const [images, setImages] = React.useState([]);

  React.useLayoutEffect(() => {
    getPictures(setImages);
  }, []);

  if (images.length === 0) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  const shuffledImages = shuffleArray(images);
  return (
    <Box display="flex" flexDir="column" marginTop="72px">
      <Box display="flex" flexDir="row" flexWrap="wrap" justifyContent="center">
        {shuffledImages.map((image: any) => {
          return <Image image={image} />;
        })}
      </Box>
    </Box>
  );
};

export default Us;
