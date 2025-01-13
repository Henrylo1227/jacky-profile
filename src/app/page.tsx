import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ContentLayout from "../components/ContentLayout";

export default function Home() {
  return (
    <Box>
      <ContentLayout background="red">
        <Text>Home</Text>
      </ContentLayout>
      <ContentLayout background="green">
        <Text>Home2</Text>
      </ContentLayout>
      <ContentLayout background="blue">
        <Text>Home3</Text>
      </ContentLayout>
    </Box>
  );
}
