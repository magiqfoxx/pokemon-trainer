import React from "react";
import { Flex, Image } from "@chakra-ui/react";

import Actions from "./Actions";

export interface DashboardProps {
  pokemon: any;
}

const Dashboard: React.SFC<DashboardProps> = ({ pokemon }) => {
  return (
    <>
      <Flex
        padding="4"
        bg="gray.100"
        direction="row"
        justifyContent="flex-end"
        mb={6}
      >
        <span>money:{pokemon.money}</span>
        <span>experience:{pokemon.exp}</span>
        <span>energy:{pokemon.energy}</span>
        <Image src={pokemon.image} />
      </Flex>
      <Actions />
    </>
  );
};

export default Dashboard;
