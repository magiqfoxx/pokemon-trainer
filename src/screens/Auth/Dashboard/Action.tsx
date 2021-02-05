import React from "react";
import { Flex, Button } from "@chakra-ui/react";

export interface ActionProps {
  img: string;
  text: string;
}

const Action: React.SFC<ActionProps> = ({ img, text }) => {
  return (
    <Flex
      padding="4"
      bg="gray.100"
      maxW="3xl"
      m={2}
      direction="column"
      justifyContent="flex-end"
    >
      <img src={img} />
      <Button colorScheme="blue" m={2}>
        {text}
      </Button>
    </Flex>
  );
};

export default Action;
