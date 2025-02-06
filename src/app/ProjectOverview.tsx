import React from "react";
import { Text, HStack, VStack } from "@chakra-ui/react";
import ContentLayout from "@components/ContentLayout";
import { PROJECT_PATHS } from "../paths";
import WelcomeProjectCard from "@components/WelcomeProjectCard";

export const PROJECT_OVERVIEW_ID = "project-overview";
const contentList = [
  {
    key: "Creative Territories",
    name: "Creative Territories",
    imagePath: undefined,
    description: "Comming soon",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.CREATIVE_TERRITORIES,
	enablePath: false,
  },
  {
    key: "HUD - Campus Project",
    name: "HUD - Campus Project",
    imagePath: "url(https://cdn.discordapp.com/attachments/310075799682416650/1336016825451942039/image.png?ex=67a24621&is=67a0f4a1&hm=9753f59f57678e1a5c5ac9be38b44acc6cc88b56b6d3bc13a15c8cce5dce12dc&)",
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: PROJECT_PATHS.CAMPUS_PROJECT,
	enablePath: true,
  },
  {
    key: "Culture of Hub",
    name: "Culture of Hub",
    imagePath: "url(https://cdn.discordapp.com/attachments/310075799682416650/1336038946500640860/5.jpg?ex=67a25abb&is=67a1093b&hm=e8513e02251e5ed76f120ac9824e4e11e7d85dd1c6726269102b9099582029ce&)",
    description: "i am not some description",
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
          textStyle="5xl"
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
