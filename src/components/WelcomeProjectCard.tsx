
import React from "react";
import { Card, Text } from "@chakra-ui/react";

export interface DescriptionContent {
  id: string;
  title: string;
  subtitle: string;
  projectPath: string;
  imagePath?: string;
}

interface CardStyle {
  bgColor: string;
  titleColor: string;
  subtitleColor: string;
}

interface DescriptionProps {
  descriptionContent: DescriptionContent;
  style?: CardStyle;
}

const DEFAULT_STYLE: CardStyle = {
  bgColor: "primary",
  titleColor: "white",
  subtitleColor: "gray",
};

export default function WelcomeProjectCard({
  descriptionContent: dc,
  style,
}: DescriptionProps) {
  style = style || DEFAULT_STYLE;

  return (
    <Card.Root
      id={dc.id}
      key={dc.id}
	  bg={dc.imagePath ? dc.imagePath : style.bgColor}
	  width="sm" 
	  height="md"
    >
      <Card.Header>
        <Card.Title textStyle="lg" color={style.titleColor}>
          <Text>{dc.title}</Text>
        </Card.Title>
      </Card.Header>
      <Card.Body color={style.subtitleColor}>
        <Text>{dc.subtitle} </Text>
      </Card.Body>
    </Card.Root>
  );
}
