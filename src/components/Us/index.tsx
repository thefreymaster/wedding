import React from 'react';
import { ArrowDown } from '../../common/ArrowDown/index';
import { PrimaryButton } from '../../common/Buttons/index';
import { Skyline } from '../../common/SVG';
import { Box } from '@chakra-ui/layout';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { getPictures } from '../../api';
import { ScaleFade, Image as ChakraImage } from '@chakra-ui/react';

const Image = (props: {
    image: any
}) => {
    const [imageUrl, setImageUrl] = React.useState();
    const [displayImage, setDisplayImage] = React.useState(false);

    React.useLayoutEffect(() => {
        const getImages = async () => {
            const url = await props.image.getDownloadURL();
            setImageUrl(url);
            setTimeout(() => {
                setDisplayImage(true);
            }, 200);
        }
        getImages();
    }, []);

    if (!imageUrl) {
        return null;
    }
    return (
        <ScaleFade initialScale={0.9} in={displayImage} >
            <ChakraImage border="1px solid #9d9d9d" borderRadius="4" margin="1" objectFit='cover' boxSize='300px' alt={imageUrl} src={imageUrl} />
        </ScaleFade>
    )
}

export const Us = () => {
    const [images, setImages] = React.useState([]);

    React.useLayoutEffect(() => {
        getPictures(setImages);
    }, []);

    if (images.length === 0) {
        return "loading"
    }
    return (
        <Box display="flex" flexDir="column" marginTop="72px">
            <Box display="flex" flexDir="row" flexWrap="wrap" justifyContent="center">
                {images.map((image: any) => {
                    return <Image image={image} />
                })}
            </Box>
            <Skyline timing={200} />
        </Box>
    )
}