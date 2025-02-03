import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

interface ContentLayoutInterface {
  children: ReactElement;
  background?: string;
  height?: string;
}

const DEFAULT_STYLE = {
	background: "secondary",
	borderColor: "negator",
	borderTopWidth: "2rem"
}

export default function ContentLayout(props: ContentLayoutInterface) {
  return (
    <Box
      asChild
      display="flex"
      width="100%"
	  justifyContent="center"
      minHeight={props.height ? props.height : { base: "90vh", sm: "100vh" }}
      background={props.background ? props.background :DEFAULT_STYLE.background}
	  borderColor={DEFAULT_STYLE.borderColor}
	  borderTopWidth={DEFAULT_STYLE.borderTopWidth}
    >
      {props.children}
    </Box>
  );
}
