import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  navbar: {
    description: "mono for Nav bar",
    value: {
      fontFamily: "cursive",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  projectPageTitle: {
    description: "project page project title",
    value: {
      fontFamily: "sans-serif",
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "32",
      letterSpacing: "2",
      textDecoration: "None",
      textTransform: "None",
    },
  },
})

