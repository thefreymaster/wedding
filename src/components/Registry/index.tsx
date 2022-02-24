import { Wrapper } from "../../common/Wrapper/index";
import { Card, CardFooter } from "../../common/Card";
import { Box } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

const registries = [
  {
    title: "Amazon",
    imageSrc: "https://elizabethandevan.s3.amazonaws.com/amazon.jpeg",
    url: "https://www.amazon.com/wedding/elizabeth-butler-evan-freymiller--july-2022/registry/2V59QYP8FBU9D",
  },
  {
    title: "Pottery Barn",
    imageSrc: "https://elizabethandevan.s3.amazonaws.com/pottery-barn.jpeg",
    description: "",
    url: "https://www.potterybarn.com/registry/kv28lnfkdh/registry-list.html?bnrid=3302439&cm_ite=hero",
  },
  {
    title: "TravelersJoy",
    imageSrc: "https://elizabethandevan.s3.amazonaws.com/island.jpeg",
    description: "Honeymoon/Adventure Fund",
    url: "https://www.travelersjoy.com/elizabethandevan/",
  },
];

const Registry = () => {
  return (
    <Wrapper in justifyContent="flex-start">
      <Box display="flex" flexDir={isMobile ? "column" : "row"}>
        {registries.map((registry: any) => (
          <Card
            title={registry.title}
            imageSrc={registry.imageSrc}
            description={registry.description}
            hoverStyle={{ boxShadow: "lg", cursor: "pointer" }}
            onClick={() => window.open(registry.url, "_blank")}
          >
            <CardFooter
              onClickLink={() => window.open(registry.url, "_blank")}
            />
          </Card>
        ))}
      </Box>
    </Wrapper>
  );
};

export default Registry;
