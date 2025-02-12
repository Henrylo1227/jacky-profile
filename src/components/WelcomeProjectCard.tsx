import React from "react";
import { LinkBox, Card, Text, VStack, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";

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
  enablePath?: boolean;
}

const DEFAULT_STYLE: CardStyle = {
  bgColor: "primary",
  titleColor: "white",
  subtitleColor: "gray.800",
};

export default function WelcomeProjectCard({
  descriptionContent: dc,
  style,
  enablePath,
}: DescriptionProps) {
  style = style || DEFAULT_STYLE;
  enablePath = enablePath === undefined ? enablePath : true;

  return (
    <Card.Root id={dc.id} key={dc.id} bg={style.bgColor} width="sm" height="md">
      <Card.Body color={style.subtitleColor} justifyContent="center">
        <VStack
          height="100%"
          bgSize="Cover"
          justifyContent="center"
          bgImage={dc.imagePath}
          bgPos="center"
        >
          <LinkBox width="100%">
            <LinkOverlay asChild>
              <NextLink href={ enablePath ? dc.projectPath : ""} />
            </LinkOverlay>
            <VStack bg="grey/80" width="100%" gap="2px" justifyContent="center">
              <Text textStyle="homePageProjectTitle" color={style.titleColor}>
                {dc.title}
              </Text>
              <Text textStyle="homePageProjectSubtitle">{dc.subtitle} </Text>
            </VStack>
          </LinkBox>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
