import React from "react";
import { Box } from "@chakra-ui/react";

export default function ContentLayout({children, background}) {
  return (
    <Box display="flex" width="100%" height="100vh" background={background}>
		{children}
    </Box>
  );
}
