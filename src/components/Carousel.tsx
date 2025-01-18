"use client";
import React, { useState, useEffect } from "react";
import { Button, Card, Link, HStack, IconButton, Text } from "@chakra-ui/react";
import { Tag } from "../components/ui/tag";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CardContent {
	key: string
	name: string  
	imagePath: string
	description: string
	tagList: string[] 
	projectPath: string
}

interface CarouselCardProps {
  contentList: CardContent[]
  showIndex: number
}

const CarouselCard = ({ contentList, showIndex }: CarouselCardProps) => {
  const content = contentList[showIndex % contentList.length];
  return (
    <Card.Root 
		key={content.key} 
		background="gold" 
		width={{base: "80%"}}
		height={{base: "80%", md: "90%"}}
		>
      <Card.Header textStyle="2xl"> {content.name} </Card.Header>
      <Card.Body>
        <Text>{content.description}</Text>
      </Card.Body>
      <Card.Footer display="flex" width="100%" justifyContent="space-between">
        <HStack>
          {content.tagList.map((tag: string) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </HStack>
        <Button background="tan">
          <Link href={content.projectPath} paddingX="2">
            Learn More
          </Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
const settings = {
  startIndex: 0,
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 5000, // in ms
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface CarouselInterface {
	contentList: CardContent[]
}

const Carousel = ({contentList}: CarouselInterface) => {
  const [showIndex, setShowIndex] = useState(settings.startIndex);

  const previousIndex = () => {
    setShowIndex((showIndex) => (showIndex - 1) % contentList.length);
  };
  const nextIndex = () => {
    setShowIndex((showIndex) => (showIndex + 1) % contentList.length);
  };

  useEffect(() => {
    const timeoutId = setTimeout(nextIndex, settings.speed);
    return () => clearTimeout(timeoutId);
  }, [showIndex]);

  return (
    <HStack
      display="flex"
      height="100%"
      width="100%"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      gap={{base: 0, md: 4, lg: 8}}
    >
      <IconButton
	  	display={{base: "none", md: "flex"}}
        aria-label="Previous Project"
        background="white"
        color="darkgrey"
        rounded="full"
        onClick={previousIndex}
      >
        <FaArrowLeft />
      </IconButton>
      <CarouselCard contentList={contentList} showIndex={showIndex} />
      <IconButton
	  	display={{base: "none", md: "flex"}}
        color="darkgrey"
        aria-label="Next Project"
        background="white"
        rounded="full"
        onClick={nextIndex}
      >
        <FaArrowRight />
      </IconButton>
    </HStack>
  );
};

export default Carousel;
