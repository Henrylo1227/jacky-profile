"use client";
import React, { useState, useEffect } from "react";
import { Image, HStack, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export interface CardContent {
	key: string
	imagePath: string
}

interface CarouselCardProps {
  contentList: CardContent[]
  showIndex: number
}

const CarouselCard = ({ contentList, showIndex }: CarouselCardProps) => {
  const content = contentList[showIndex % contentList.length];
  return (
    <Image
		key={content.key} 
		alt={content.key}
		src={content.imagePath}
		width={{base: "60vw"}}
		height={{base: "30vh", md: "40vh"}}
		>
    </Image>
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
// eslint-disable-next-line
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
