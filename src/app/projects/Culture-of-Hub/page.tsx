import React from "react";
import {
  Button,
  HStack,
  VStack,
  Box,
  Text,
  Card,
  Image,
  Link,
} from "@chakra-ui/react";
import { DescriptionContent } from "@components/DescriptionCard";
import ContentLayout from "@components/ContentLayout";
import IMAGE_PATH from "../../../../public/images/imagesPaths";

const pageTiltle = "Culture of Hub";
const descriptions: { [key: string]: DescriptionContent } = {
  BRIEF: {
    id: "culture of hub - brief",
    title: "Project Brief",
    subtitle: "the bref description of the Culture of Hub project",
    content:
      "Design a flexible and adaptable ‘furnitecture’ piece that serves as a welcoming hub for community engagement by the Cultures of Team.",
  },
  CONCEPT: {
    id: "culture of hub - concept",
    title: "Project Concept",
    subtitle: "the project concept of the Culture of Hub project",
    content:
      "Symbolizing the ecology by Honeycomb to show the core and connection the nature.",
  },
  INTENSION: {
    id: "culture of hub - intension",
    title: "Why Honeycomb?",
    subtitle: "the insperation of chooing Honeycomb as design concept",
    content:
      "Reason of selecting “Honeycomb” mportance of pollination: Bees play a role in pollinating 75% of the world’s crops, supporting plant reproduction and biodiversity， representing the interconnectedness of ecosystems",
  },
  CHAIR_DESCRIPTION: {
    id: "culture of hub - chair / table",
    title: "Chair or Table? or Both!",
    subtitle: "the chair or table",
    content:
      "This is a flip-able seating and working-table. When it goes up, it is seating; when it goes down, it become a table, depends on the needs. is a flip",
  },
  CHAIR_STRUCTURE: {
    id: "culture of hub - chair / table: structure",
    title: "",
    subtitle: "structure and connection",
    content:
      "These shows how the parts join together, I have studied and experiment how different joint work with each other.",
  },
};

export default function ProjectPageCOH() {
  return (
    <>
      <ContentLayout backgroundImage={IMAGE_PATH.LARGE.HOD_COVER}>
        <VStack gap="2vh">
          <HStack gap="5vw" alignSelf="start" alignItems="end">
            <Box
              display="flex"
              justifyContent="end"
              minWidth="fit-content"
              width="55vw"
              height="30vh"
              bg="gray"
              opacity="0.8"
            >
              <Text p="2rem" width="fit-content" textStyle="projectPageTitle">
                {pageTiltle}
              </Text>
            </Box>
          </HStack>
        </VStack>
      </ContentLayout>
      <ContentLayout>
        <VStack gap="4rem" paddingY="3rem">
          <HStack
            gap={{
              base: "3rem",
              md: "5rem",
            }}
          >
            <Image
              alt="chair model"
              width="400px"
              src={IMAGE_PATH.MEDIUM.COH_MODEL_2}
            />
            <Card.Root
              maxWidth="17rem"
              bg="negator"
              color="white"
              opacity="0.9"
              shadow="lg"
              shadowColor="black"
            >
              <Card.Header>
                <Card.Title
                  textStyle="projectPageContent"
                  color="white"
                  opacity="1"
                >
                  <Text>{descriptions.BRIEF.title}</Text>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Text>{descriptions.BRIEF.content}</Text>
              </Card.Body>
              <Card.Footer />
            </Card.Root>
          </HStack>
          <HStack gap="4rem">
            <Card.Root
              maxWidth="15rem"
              bg="negator"
              color="white"
              opacity="0.8"
              shadow="lg"
              shadowColor="black"
            >
              <Card.Header>
                <Card.Title textStyle="projectPageContent" color="white">
                  <Text>{descriptions.CONCEPT.title}</Text>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Text>{descriptions.CONCEPT.content}</Text>
              </Card.Body>
              <Card.Footer />
            </Card.Root>
            <Image
              alt="chair model"
              width="300px"
              src={IMAGE_PATH.MEDIUM.COH_MODEL_3}
            />
          </HStack>

          <Card.Root
            maxWidth="25rem"
            bg="negator"
            color="white"
            opacity="0.8"
            shadow="lg"
            shadowColor="black"
          >
            <Card.Header>
              <Card.Title textStyle="projectPageContent" color="white">
                <Text>{descriptions.INTENSION.title}</Text>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Text>{descriptions.INTENSION.content}</Text>
            </Card.Body>
            <Card.Footer />
          </Card.Root>
          <HStack gap="5rem">
            <Image
              alt="chair model"
              width="300px"
              src={IMAGE_PATH.MEDIUM.COH_MODEL_4}
            />
            <Image
              alt="chair model"
              width="300px"
              src={IMAGE_PATH.MEDIUM.COH_MODEL_1}
            />
          </HStack>
        </VStack>
      </ContentLayout>
      <ContentLayout>
        <VStack gap="4rem" paddingY="3rem">
          <HStack display="flex" gap="2rem">
            <Image
              alt="chair"
              aspectRatio={2 / 3}
              width="300px"
              src={IMAGE_PATH.MEDIUM.COH_CHAIR}
            />
            <VStack gap="1rem">
              <Card.Root
                maxWidth="20rem"
                bg="negator"
                color="white"
                opacity="0.8"
                shadow="lg"
                shadowColor="black"
              >
                <Card.Header>
                  <Card.Title textStyle="projectPageContent" color="white">
                    <Text>{descriptions.CHAIR_DESCRIPTION.title}</Text>
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Text>{descriptions.CHAIR_DESCRIPTION.content}</Text>
                </Card.Body>
                <Card.Footer />
              </Card.Root>

              <Image
                alt="3D chair model"
                aspectRatio={5 / 3}
                paddingLeft="3rem"
                width="450px"
                src={IMAGE_PATH.MEDIUM.COH_CHAIR_3D}
              />
            </VStack>
          </HStack>
          <VStack gap="2rem">
            <Text>{descriptions.CHAIR_STRUCTURE.content}</Text>
            <HStack>
              <Image
                alt="joint 1"
                aspectRatio={5 / 3}
                paddingLeft="3rem"
                width="300px"
                src={IMAGE_PATH.MEDIUM.COH_JOINT_1}
              />
              <Image
                alt="joint 2"
                aspectRatio={5 / 3}
                paddingLeft="3rem"
                width="300px"
                src={IMAGE_PATH.MEDIUM.COH_JOINT_2}
              />
              <Image
                alt="joint 3"
                aspectRatio={5 / 3}
                paddingLeft="3rem"
                width="300px"
                src={IMAGE_PATH.MEDIUM.COH_JOINT_3}
              />
            </HStack>
            <VStack>
              <Button
                asChild
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
                    "https://firebasestorage.googleapis.com/v0/b/image-cdn-fb0d4.firebasestorage.app/o/jacky-profile-project%2Fcoh_doc%2F(4)%20A3%20Presentation.pdf?alt=media&token=890b3594-2a76-4dcb-852b-655755d31fe6"
                  }
                >
                  Download A3 Presentation
                </Link>
              </Button>
              <Button
                asChild
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
                    "https://firebasestorage.googleapis.com/v0/b/image-cdn-fb0d4.firebasestorage.app/o/jacky-profile-project%2Fcoh_doc%2F(5)%20AutoCAD_Detail%20DrawingTemplate(Culture)-A1_Cult_Plan%201%2B2.pdf?alt=media&token=2c5ce50b-5571-4b39-8b98-9d9957b03abb"
                  }
                >
                  Download Technical Drawing
                </Link>
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </ContentLayout>
    </>
  );
}
