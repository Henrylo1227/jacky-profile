import React from "react";
import { VStack, HStack, Text, List, Icon } from "@chakra-ui/react";
import { FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

// configurations
const footerText = "Jacky.L's Profile";
const copyrightText = "© 2025 Tsz Yip Jacky LO. All right reserved.";
const socialMediaList = [
  { label: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com" },
  { label: "x", icon: <FaTwitter />, href: "https://www.x.com" },
  { label: "YouTube", icon: <FaYoutube />, href: "https://www.youtube.com" },
];

const SocialMediaGroup = () => {
  return (
    <List.Root
      display="flex"
      flexDir="row"
      gap="3"
      paddingX="5"
      gridColumnStart="3"
      gridColumnEnd="4"
      justifySelf="right"
    >
      {socialMediaList.map((x) => (
        <List.Item key={x.label} justifyContent="center" alignContent="center">
          <a href={x.href}>
            <Icon asChild boxSize="5">
              {x.icon}
            </Icon>
          </a>
        </List.Item>
      ))}
    </List.Root>
  );
};

const Footer = () => {
  return (
    <VStack as="footer" width="100%" background="grey">
      <HStack paddingTop="3">
        <Text textStyle="md" fontWeight="bolder">
          {footerText}
        </Text>
        <SocialMediaGroup />
      </HStack>
      <Text textStyle="xs">{copyrightText}</Text>
    </VStack>
  );
};

export default Footer;
