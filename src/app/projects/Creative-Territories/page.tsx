import React from "react";
import { HStack, VStack, Image, Text } from "@chakra-ui/react";
import DescriptionCard, {
  DescriptionContent,
} from "@components/DescriptionCard";
import ContentLayout from "@components/ContentLayout";

const pageTiltle = "Fashionsta"
const imageList = [];
const descriptionList: DescriptionContent[] = [
  {
    id: "description-id-0",
    title: "Design",
    subtitle: "my project",
    content: "bruuhh bruuh bruhhh",
  },
  {
    id: "description-id-1",
    title: "Concept",
    subtitle: "from life",
    content: "bruuhh bruuh bruhhh brahhhh",
  },
];

export default function ProjectPageCreativeTerritories() {
  return (
    <ContentLayout background="red">
      <VStack gap="2vh">
	  	<Text textStyle="projectPageTitle">{pageTiltle}</Text>
        <HStack gap="5vw">
          <DescriptionCard
            descriptionContent={descriptionList[0]}
            style={{ bgColor: "gray", titleColor: "white", textColor: "red" }}
          />
          <Image
            height="30vh"
            alt="temp_image"
            src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
          />
        </HStack>
        <HStack gap="5vw">
          <DescriptionCard
            descriptionContent={descriptionList[0]}
            style={{ bgColor: "gray", titleColor: "white", textColor: "red" }}
          />
          <Image
            alt="temp_image"
            height="20vh"
            src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
          />
        </HStack>
        <HStack gap="5vw">
          <Image
            height="40vh"
            alt="temp_image"
            src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
          />
          <DescriptionCard
            descriptionContent={descriptionList[0]}
            style={{ bgColor: "gray", titleColor: "white", textColor: "red" }}
          />
        </HStack>
      </VStack>
    </ContentLayout>
  );
}
