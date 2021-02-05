import React from "react";
import { Flex } from "@chakra-ui/react";

import Action from "./Action";

import sleep from "../../../assets/bed.png";
import fight from "../../../assets/gym.png";
import train from "../../../assets/train.png";

export interface ActionsProps {}

const Actions: React.SFC<ActionsProps> = () => {
  return (
    <Flex direction="row" justify="center">
      <Action img={train} text="Train" />
      <Action img={sleep} text="Sleep" />
      <Action img={fight} text="Fight!" />
    </Flex>
  );
};

export default Actions;
