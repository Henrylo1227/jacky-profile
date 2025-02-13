import React from "react";
import {
  Button,
  HStack,
  VStack,
  Box,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { DescriptionContent } from "@components/DescriptionCard";
import ContentLayout from "@components/ContentLayout";
import IMAGE_PATH from "../../../../public/images/imagesPaths";
import Carousel, {CardContent} from "@components/Carousel";

const pageTiltle = "HUD - Campus Project";
const carouselContent: CardContent[] = [

	{
		key: "image1",
		imagePath: IMAGE_PATH.MEDIUM.HUD_ENSCAPE_COUNTER_PSED,
	},
	{
		key: "image1",
		imagePath: IMAGE_PATH.MEDIUM.HUD_ENSCAPE_SOCIAL,
	},
	{
		key: "image1",
		imagePath: IMAGE_PATH.MEDIUM.HUD_ENSCAPE_PRIVATE,
	},


];
const descriptions: { [key: string]: DescriptionContent } = {
  BRIEF: {
    id: "Hub - Campus Project",
    title: "Project Brief",
    subtitle: "the bref description of the Hud-campus project",
    content:
      "This project is going to redesign an existed space in ”Toast House” which located in the University of Huddersfield campus. By considered the needs of audience, re-planning the space and selecting material with AutoCAD and Sketch up.",
  },
  CONCEPT: {
    id: "Hub - Campus Project - concept",
    title: "Naturalistic",
    subtitle: "the project concept of the Hud-campus project",
    content:
      "Naturalistic is the theme of my design. The concept of the design is allowing people feel recharged when they in the space. Therefore, the design keep align with “Nature”, ”Playful”, ”Sensory” element.",
  },
};

export default function ProjectPageCOH() {
  return (
    <>
      <ContentLayout backgroundImage={IMAGE_PATH.MEDIUM.HUD_COVER}>
        <VStack gap="2vh">
          <HStack gap="5vw" alignSelf="start" alignItems="end">
            <Box
              display="flex"
              justifyContent="end"
              minWidth="fit-content"
              width="55vw"
              height="30vh"
              bg="gray"
              opacity="0.8"
            >
              <Text p="2rem" width="fit-content" textStyle="projectPageTitle">
                {pageTiltle}
              </Text>
            </Box>
          </HStack>
        </VStack>
      </ContentLayout>
      <ContentLayout>
        <VStack gap="4rem" paddingY="3rem">
		  <Text paddingY="2rem" maxWidth="40vw">{descriptions.BRIEF.content}</Text>
          <HStack display="flex" gap="2rem">
            <Image
              alt="chair"
              width="40vw"
              src={IMAGE_PATH.LARGE.HUD_FLOOR_PLAN}
            />
            <VStack gap="1rem">
              <Text maxWidth="40vw">{descriptions.CONCEPT.content}</Text>
              <HStack gap="1rem">
                <Image
                  alt="floor plan ext"
                  width="10vw"
                  src={IMAGE_PATH.LARGE.HUD_ID_CAD_TEMPLATE_TECHNICAL_1}
                />
                <Image
                  alt="floor plan ext"
                  width="10vw"
                  src={IMAGE_PATH.LARGE.HUD_ID_CAD_TEMPLATE_TECHNICAL_2}
                />
                <Image
                  alt="floor plan ext"
                  width="10vw"
                  src={IMAGE_PATH.LARGE.HUD_ID_CAD_TEMPLATE_TECHNICAL_3}
                />
              </HStack>
            </VStack>
          </HStack>
          <VStack>
			<Carousel contentList={carouselContent} showIndex={0}/>
            <Button
              asChild
              paddingX="2rem"
              paddingY="1.5rem"
              background="tertiary"
              borderColor="primary"
              borderWidth="medium"
              display="flex"
              textStyle="button"
            >
              <Link
                href={
                  "https://firebasestorage.googleapis.com/v0/b/image-cdn-fb0d4.firebasestorage.app/o/jacky-profile-project%2Fcoh_doc%2FHud-Campus%20Project%20Technical%20Drawing.pdf?alt=media&token=54e7cb09-4cdf-4ae2-89dc-e2907a8a46f6"
                }
              >
                Download Technical Drawing
              </Link>
            </Button>
          </VStack>
        </VStack>
      </ContentLayout>
    </>
  );
}
