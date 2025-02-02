import React from "react";
import { Box, Text, Button, IconButton, Link } from "@chakra-ui/react";
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
          <Button
            asChild
            background="transparent"
            display={{ base: "none", md: "flex" }}
          >
            <Link textStyle="navbar" href={x.href}>
              <Text>{x.label}</Text>
            </Link>
          </Button>
          <IconButton
            asChild
            display={{ base: "flex", md: "none" }}
            size="lg"
            background="transparent"
          >
            <Link href={x.href}>{x.icon}</Link>
          </IconButton>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default function Navbar() {
  return (
    <Box
      zIndex="docked"
      display="flex"
      width="100%"
      height="5vh"
      background="primary"
      border="white"
      borderWidth="thin"
      position="fixed"
      justifyContent="space-between"
	  textStyle="navbar"
      alignItems="center"
    >
      <Link
        display={{ base: "none", md: "flex" }}
        paddingX="10"
        href={navPageList[0].href}
      >
        {navbarTitle}
      </Link>
      <Link display={{ md: "none" }} paddingX="10" href={navPageList[0].href}>
        {navbarTitleShort}
      </Link>
      <Menu />
    </Box>
  );
}
