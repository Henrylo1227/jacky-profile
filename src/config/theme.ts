import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { textStyles } from "./textStyles"

const config = defineConfig({
  theme: {
    textStyles,
	tokens: {
		colors: {
			primary: {
				value: "#44523B"
			},
			secondary: {
				value: "#556A51"
			},
			tertiary: {
				value: "#677A5B"
			},
			negator: {
				value: "#615639"
			}
		}
	}
  },
})
export default createSystem(defaultConfig, config)
