import React from "react";
import { Card, ColorPalette, Text } from "@chakra-ui/react";

export interface DescriptionContent {
  id: string;
  title: string;
  subtitle: string;
  content: string;
}

interface CardStyle {
  bgColor: ColorPalette;
  titleColor: ColorPalette;
  textColor: ColorPalette;
}

interface DescriptionProps {
  descriptionContent: DescriptionContent;
  style?: CardStyle;
}

const DEFAULT_STYLE: CardStyle = {
  bgColor: "black",
  titleColor: "white",
  textColor: "red",
};

export default function DescriptionCard({
  descriptionContent,
  style,
}: DescriptionProps) {
  style = style || DEFAULT_STYLE;

  return (
    <Card.Root
      id={descriptionContent.id}
      key={descriptionContent.id}
	  bg={style.bgColor}
      color={style.textColor}
	  opacity="0.8"
	  shadow="lg"
	  shadowColor="black"
    >
      <Card.Header>
        <Card.Title textStyle="lg" color={style.titleColor}>
          <Text>{descriptionContent.title}</Text>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Text>{descriptionContent.content}</Text>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
}
