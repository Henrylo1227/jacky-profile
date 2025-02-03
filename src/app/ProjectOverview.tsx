import React from "react";
import { Text, HStack, VStack } from "@chakra-ui/react";
import ContentLayout from "@components/ContentLayout";
import { PROJECT_PATHS } from "../paths";
import WelcomeProjectCard from "@components/WelcomeProjectCard";

export const PROJECT_OVERVIEW_ID = "project-overview";
const contentList = [
  {
    key: "Fashionista",
    name: "Fashionista",
    imagePath: undefined,
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.FASHIONISTA,
  },
  {
    key: "HUD - Campus Project",
    name: "HUD - Campus Project",
    imagePath: undefined,
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.CAMPUS_PROJECT,
  },
  {
    key: "Culture of Hub",
    name: "Culture of Hub",
    imagePath: undefined,
    description: "comming soon",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.CULTURE_OF_HUB,
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
          textStyle="5xl"
          alignSelf="center"
        >
          Projcects
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
            ></WelcomeProjectCard>
          ))}
        </VStack>
      </VStack>
    </ContentLayout>
  );
}
