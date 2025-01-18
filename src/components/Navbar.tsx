import React from "react";
import { Box, Text, Button, IconButton } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { FiInfo } from "react-icons/fi";
import { LuFolderPen } from "react-icons/lu";

// configurations
const navbarTitle = "Jacky Lo's Portfolio";
const navbarTitleShort = "Jacky";
const navPageList = [
  { label: "Home", icon: <AiOutlineHome />, href: "/" },
  { label: "Projects", icon: <LuFolderPen />, href: "/projects" },
  { label: "About", icon: <FiInfo />, href: "/about" },
];

const Menu = () => {
  return (
    <List.Root display="flex" flexDir="row" paddingX="10">
      {navPageList.map((x) => (
        <List.Item key={x.label}>
          <Button asChild background="transparent" display={{ base: "none", md: "flex" }}>
            <a href={x.href}>{x.label}</a>
          </Button>
          <IconButton
            display={{ base: "flex", md: "none" }}
            size="lg"
            background="transparent"
          >
            <a href={x.href}>{x.icon}</a>
          </IconButton>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default function Navbar() {
  return (
    <Box
      display="flex"
      width="100%"
      height="5vh"
      background="black"
      border="white"
      borderWidth="thin"
      position="fixed"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        display={{ base: "none", md: "flex" }}
        paddingX="10"
        textStyle="2xl"
      >
        <a href={navPageList[0].href}>{navbarTitle}</a>
      </Text>
      <Text display={{ md: "none" }} paddingX="10" textStyle="monoNar">
        <a href={navPageList[0].href}>{navbarTitleShort}</a>
      </Text>
      <Menu />
    </Box>
  );
}
