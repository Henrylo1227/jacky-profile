import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";

// configurations
const navbarTitle = "Tsz Yip Jacky Lo's Profile";
const navPageList = [
  { label: "Home", icon: "", href: "/" },
  { label: "Projects", icon: "", href: "/projects" },
  { label: "About", icon: "", href: "/about" },
];

const Menu = () => {
  return (
    <List.Root display="flex" flexDir="row" paddingX="10">
      {navPageList.map((x) => (
        <List.Item key={x.label}>
          <Button asChild background="transparent">
            <a href={x.href}>{x.label}</a>
          </Button>
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
      background="salmon"
      position="fixed"
      justifyContent="space-between"
	  alignItems="center"
    >
      <Text paddingX="10" textStyle="2xl">{navbarTitle}</Text>
      <Menu />
    </Box>
  );
}
