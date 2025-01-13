import React, { ReactElement } from "react";
import { Box, ColorPalette } from "@chakra-ui/react";

interface ContentLayoutInterface {
	children: ReactElement,
  	background: ColorPalette,
	height?: string
}

export default function ContentLayout(props:ContentLayoutInterface) {
  return (
    <Box display="flex" width="100%" height={props.height? props.height : "100vh"} background={props.background}>
      {props.children}
    </Box>
  );
}
