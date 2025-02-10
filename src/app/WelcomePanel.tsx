"use client";
import ContentLayout from "@components/ContentLayout";
import PrimaryButton from "@components/PrimaryButton";
import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import { PROJECT_OVERVIEW_ID } from "./ProjectOverview";
import { scrollToSection } from "@utils/uiUtils";

const welcomeTextList = [
  "I'm Jacky Lo, An Interior Design student from the University of Huddersfield.",
  "Sharpening my skills with various industrial level softwares and borden my knowledge from my continuous projects.",
];

export default function WelcomePanel() {
  return (
    <ContentLayout>
      <VStack gap="3rem">
        <Text textStyle="homePageWelcome">Welcome!</Text>
        <Box
          gap="2rem"
          height="100%"
          display="flex"
          flexDir="column"
          width={{
            md: "sm",
            lg: "md",
          }}
        >
          {welcomeTextList.map((x, index) => (
            <Text
              key={index}
              textStyle="homePageWelcomeContent"
              textAlign="center"
            >
              {x}
            </Text>
          ))}
          <Box justifyContent="center" display="flex">
            <PrimaryButton
              label="More"
              onClick={() => scrollToSection(PROJECT_OVERVIEW_ID)}
            />
          </Box>
        </Box>
      </VStack>
    </ContentLayout>
  );
}
