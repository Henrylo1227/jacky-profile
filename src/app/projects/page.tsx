import React from "react"
import { Box, Text } from "@chakra-ui/react";
import ContentLayout from "../../components/ContentLayout";

export default function ProjectsHome() {
  return (
    <Box>
      <ContentLayout background="red.700">
        <Text>Project</Text>
      </ContentLayout>
      <ContentLayout background="green.700">
        <Text>Project2</Text>
      </ContentLayout>
      <ContentLayout background="blue.700">
        <Text>Project3</Text>
      </ContentLayout>
    </Box>
  );
}
