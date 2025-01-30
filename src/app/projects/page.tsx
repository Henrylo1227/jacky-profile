import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ContentLayout from "@components/ContentLayout";

type ProjectInfo = {
  name: string;
  description: string;
  tags?: string[];
};

const projectInfoList: ProjectInfo[] = [
  { name: "Fashionista", description: "bruhh bruhhh bruhhhhh" },
  { name: "HUD - Campus Project", description: "bruhh bruhhh bruhhhhh" },
  { name: "Culture of Hub", description: "bruhh bruhhh bruhhhhh" },
];

export default function ProjectsHome() {
  return (
    <Box>
      {projectInfoList.map((x,i) => (
        <ContentLayout key={i} background="red.700">
          <Text>{x.name}</Text>
        </ContentLayout>
      ))}
    </Box>
  );
}
