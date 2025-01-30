import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ContentLayout from "../components/ContentLayout";
import Carousel from "../components/Carousel";
import { PROJECT_PATHS } from "../paths"

export const PROJECT_OVERVIEW_ID = "project-overview"
const contentList = [
  {
    key: "Fashionista",
    name: "Fashionista",
    imagePath: "imagePath",
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.FASHIONISTA,
  },
  {
    key: "HUD - Campus Project",
    name: "HUD - Campus Project",
    imagePath: "imagePath",
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.CAMPUS_PROJECT,
  },
  {
    key: "Culture of Hub",
    name: "Culture of Hub",
    imagePath: "imagePath",
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.CULTURE_OF_HUB,
  },
];

export default function ProjectOverview() {
  return (
    <ContentLayout background="black">
      <Box
	  	id={PROJECT_OVERVIEW_ID}
        display="flex"
        padding="4px"
        borderStyle="solid"
        borderColor="white"
        borderWidth="2xp"
        flexDir="column"
      >
        <Text
          display="flex"
          p={{ base: "4", md: "5", lg: "8" }}
          textStyle="5xl"
          alignSelf="center"
        >
          Projcects
        </Text>
        <Carousel contentList={contentList} />
      </Box>
    </ContentLayout>
  );
}
