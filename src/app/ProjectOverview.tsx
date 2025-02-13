import React from "react";
import { Text, HStack, VStack } from "@chakra-ui/react";
import ContentLayout from "@components/ContentLayout";
import { PROJECT_PATHS } from "../paths";
import WelcomeProjectCard from "@components/WelcomeProjectCard";
import IMAGE_PATH from "../../public/images/imagesPaths";

export const PROJECT_OVERVIEW_ID = "project-overview";
const contentList = [
  {
    key: "Creative Territories",
    name: "Creative Territories",
    imagePath: IMAGE_PATH.LARGE.CT_COVER,
    description: "Comming soon",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: "",
	enablePath: false,
  },
  {
    key: "HUD - Campus Project",
    name: "HUD - Campus Project",
    imagePath: IMAGE_PATH.LARGE.HUD_COVER,
    description: "",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.CAMPUS_PROJECT,
	enablePath: true,
  },
  {
    key: "Culture of Hub",
    name: "Culture of Hub",
    imagePath: IMAGE_PATH.LARGE.HOD_COVER,
    description: "",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.CULTURE_OF_HUB,
	enablePath: true,
  },
];

export default function ProjectOverview() {
  return (
    <ContentLayout>
      <VStack
        id={PROJECT_OVERVIEW_ID}
        display="flex"
        padding="4px"
        flexDir="column"
      >
        <Text
          display="flex"
          p={{ base: "4", md: "5", lg: "8" }}
          textStyle="homePageProject"
          alignSelf="center"
        >
          Projects
        </Text>
        <HStack display={{ base: "none", lg: "flex" }}>
          {contentList.map((x, index) => (
            <WelcomeProjectCard
              key={index}
              descriptionContent={{
                id: x.key,
                title: x.name,
                subtitle: x.description,
                imagePath: x.imagePath,
                projectPath: x.projectPath,
              }}
			  enablePath={x.enablePath}
            ></WelcomeProjectCard>
          ))}
        </HStack>
        <VStack display={{ base: "flex", lg: "none" }}>
          {contentList.map((x, index) => (
            <WelcomeProjectCard
              key={index}
              descriptionContent={{
                id: x.key,
                title: x.name,
                subtitle: x.description,
                imagePath: x.imagePath,
                projectPath: x.projectPath,
              }}
			  enablePath={x.enablePath}
            ></WelcomeProjectCard>
          ))}
        </VStack>
      </VStack>
    </ContentLayout>
  );
}
