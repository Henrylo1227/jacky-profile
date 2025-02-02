"use client"
import React from "react";
import { Button, Box, Grid, GridItem, Text, } from "@chakra-ui/react";
import ContentLayout from "@components/ContentLayout";
import { scrollToSection } from "@utils/uiUtils";
import { PROJECT_OVERVIEW_ID } from "./ProjectOverview"

const welcomeText = "Please enjoy my project! Hope they bring you inspiration.";

export default function WelcomePanel() {
  return (
    <ContentLayout >
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={0}
        paddingY="10"
        paddingX="5"
        display="flex"
        justifyContent="center"
      >
        <GridItem
          colSpan={1}
          style={{ backgroundColor: "secondary", border: "2px solid white" }}
          display={{ base: "none", md: "flex" }}
        >
          <Text p="8" textStyle="6xl" alignSelf="start">
            Welcome ...
          </Text>
        </GridItem>
        <GridItem
          colSpan={3}
          padding={10}
          style={{ backgroundColor: "black", border: "2px solid white" }}
        >
          <Box
            gap="12"
			height="100%"
			display="flex"
			flexDir="column"
			justifyContent="space-between"
			width={{
				md: "sm",
				lg: "md",
			}}
          >
            <Text textStyle="3xl">{welcomeText}</Text>
            <Button onClick={()=>scrollToSection(PROJECT_OVERVIEW_ID)}>
                <Text 
                paddingX="8"
                paddingY="3"
                display="flex"
                style={{
                  backgroundColor: "black",
                  border: "2px solid white",
                  borderRadius: "0px",
                }}
				textStyle="2xl">More</Text>
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </ContentLayout>
  )
}
