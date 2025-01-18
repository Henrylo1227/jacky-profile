import React from "react";
import { Box } from "@chakra-ui/react";
import WelcomePanel from "./WelcomePanel";
import ProjectOverview from "./ProjectOverview";

export default function Home() {
  return (
    <Box>
		<WelcomePanel/>
		<ProjectOverview/>
    </Box>
  );
}
