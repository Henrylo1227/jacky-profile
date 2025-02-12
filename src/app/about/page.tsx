import React from "react";
import { Link, Button, HStack, Text, VStack } from "@chakra-ui/react";
import ContentLayout from "@components/ContentLayout";

const aboutContentList = [
  `
	I am a detail focused, self-motivated, efficient, conscientious second year student, with very keen to learn, discover new ideas and develop skills, knowledge and experience in practice.`,
  ` Also, I am looking to secure interior designer to begin a career and learn alongside other professionals of the sector.
For know more about me, there is my CV below.`,
];

export default function About() {
  return (
    <ContentLayout>
      <HStack
        gap={{
          base: "15px",
          md: "35px",
          lg: "55px",
        }}
      >
        <Text
          display={{
            base: "none",
            md: "flex",
          }}
          width="30vw"
          height="20vh"
          textStyle="aboutPageTitle"
          paddingTop="5px"
          paddingLeft="25px"
          bg="primary"
        >
          About Me
        </Text>
        <VStack
          gap="20px"
          width={{
            base: "55vw",
            md: "35vw",
            lg: "20vw",
          }}
        >
          <Text
            display={{
              base: "flex",
              md: "none",
            }}
            textStyle="aboutPageTitle"
            bg="primary"
            paddingX="10px"
          >
            About Me
          </Text>
          {aboutContentList.map((content, i) => {
            return (
              <Text key={i} minWidth="200px" textStyle="aboutPageContent">
                {content}
              </Text>
            );
          })}
			<Button asChild
				paddingX="2rem" 
				paddingY="1.5rem"
				background="tertiary"
				borderColor="primary"
				borderWidth="medium"
				display="flex"
				textStyle="button"
			>
              <Link
                href={
                  "https://firebasestorage.googleapis.com/v0/b/image-cdn-fb0d4.firebasestorage.app/o/jacky-profile-project%2Fcoh_doc%2FTsz%20Yip%20Jacky%20Lo-CV.pdf?alt=media&token=5ce69d1a-5db4-4c22-83c4-a90cb7a1f6d3"
                }
              >
				Download CV 
              </Link>
			</Button>
        </VStack>
      </HStack>
    </ContentLayout>
  );
}
