import {Button, Text} from "@chakra-ui/react";
import React from "react";


export interface PrimaryButtonProps {
	label: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
}

export default function PrimaryButton ({label, onClick, disabled} : PrimaryButtonProps) {
	return (
          <Button
			paddingX="2rem" 
			paddingY="1.5rem"
		  	background="tertiary"
		  	borderColor="primary"
			borderWidth="medium"
            display="flex"
            textStyle="button"
            onClick={onClick}
			disabled={disabled}
          >
            <Text 
			>{label}</Text>
          </Button>
	)
}
