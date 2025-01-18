"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ContentLayout from "../components/ContentLayout";
import Carousel from "../components/Carousel";

export const PROJECT_OVERVIEW_ID = "project-overview"
const contentList = [
  {
    key: "project card key",
    name: "project name 0",
    imagePath: "imagePath",
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: "",
  },
  {
    key: "project card key",
    name: "project name 1",
    imagePath: "imagePath",
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: "",
  },
  {
    key: "project card key",
    name: "project name 2",
    imagePath: "imagePath",
    description: "i am some description",
    tagList: ["tag1", "tag2", "tag3", "tag4"],
    projectPath: "",
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
