import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

interface ContentLayoutInterface {
  children: ReactElement;
  background: string;
  height?: string;
}

export default function ContentLayout(props: ContentLayoutInterface) {
  return (
    <Box
      asChild
      display="flex"
      width="100%"
      height={props.height ? props.height : {base: "90vh", sm: "100vh"}}
      background={props.background}
    >
      {props.children}
    </Box>
  )
}
