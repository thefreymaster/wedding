import { Badge, Box, IconButton, Image } from '@chakra-ui/react';
import { Skyline } from '../../common/SVG';
import { GoLinkExternal } from 'react-icons/go';
import { BiMap } from 'react-icons/bi';

export const Card = (props: { title: string; description: React.ReactNode; badge: string; imageSrc: string, children?: React.ReactNode }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" margin="2" backgroundColor="white">
            <Image objectFit='cover' boxSize='300px' src={props.imageSrc} />

            <Box p="6">
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
                    <Box as='span' color='gray.600' fontSize='sm'>
                        {props.description}
                    </Box>
                </Box>
                {props.children}
            </Box>
        </Box>
    )
}

export const CardFooter = () => (
    <Box paddingTop="5" display="flex" justifyContent="flex-end">
        <IconButton marginRight="2" size="sm" aria-label="external" icon={<BiMap />} />
        <IconButton size="sm" aria-label="external" icon={<GoLinkExternal />} />
    </Box>
)

export const Attractions = () => {
    return (
        <Box>
            <Box style={{
                width: 'calc(100vw)',
            }}
                display="flex"
                justifyContent="center"
                flexDir="row"
                marginTop="100px"
                flexWrap="wrap"
            >
                <Card
                    badge="PARKS"
                    title="Charles River Esplanade"
                    description="Explore the park system around the Charles River bordered by Cambridge and Boston."
                    imageSrc="https://elizabethandevan.s3.amazonaws.com/charles-river-1-medium.jpeg"
                />
                <Card
                    badge="FOOD"
                    title="North End"
                    description="The old italian district in Boston, feast on classic italian eats."
                    imageSrc="https://elizabethandevan.s3.amazonaws.com/northend2.jpeg"
                />
                <Card
                    badge="SITES"
                    title="Seaport"
                    description="Get fresh caught seafood right off the boat"
                    imageSrc="https://elizabethandevan.s3.amazonaws.com/northend2.jpeg"
                />
                <Card
                    badge="SITES"
                    title="Harvard Yard"
                    description="Explore history Harvard and the many amenities it has to offer"
                    imageSrc="https://elizabethandevan.s3.amazonaws.com/northend2.jpeg"
                />
                <Card
                    badge="SITES"
                    title="Boston Common"
                    description="Discover all 50 acres of the oldest city park in the United States"
                    imageSrc="https://elizabethandevan.s3.amazonaws.com/northend2.jpeg"
                />
                <Card
                    badge="BASEBALL"
                    title="Fenway Park"
                    description="Go to the historic Fenway Park to root on the Red Sox"
                    imageSrc="https://elizabethandevan.s3.amazonaws.com/northend2.jpeg"
                />
                <Card
                    badge="SITES"
                    title="Freedom Trail"
                    description="Follow in the step of our founding fathers, and see where the American Revolution started"
                    imageSrc="https://elizabethandevan.s3.amazonaws.com/northend2.jpeg"
                />
            </Box>
            <Skyline timing={200} />
        </Box>
    )
}