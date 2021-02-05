import React from "react";
import { Box, Flex, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";

import bulbasaur from "../../../assets/bulbasaur.png";
import squirtle from "../../../assets/squirtle.png";
import charmander from "../../../assets/charmander.png";

const images = {
  Bulbasaur: bulbasaur,
  Squirtle: squirtle,
  Charmander: charmander,
};
const STARTER_POKEMONS = gql`
  query GetStarterPokemons {
    starterPokemons {
      name
      image
    }
  }
`;

export interface ChoosePokemonProps {}

const ChoosePokemon: React.SFC<ChoosePokemonProps> = () => {
  const { loading, error, data } = useQuery(STARTER_POKEMONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box>
      <Heading>Choose your pokemon!</Heading>
      <Flex direction="row" justify="center">
        {data.starterPokemons.map(
          ({ name, image }: { name: string; image: string }) => {
            return (
              <Box key={name} padding="4" bg="gray.100" maxW="3xl" m={2}>
                <Image
                  /*  @ts-ignore: Unreachable code error */
                  src={images[name]}
                  htmlHeight={300}
                  htmlWidth={300}
                />
                <Text>{name}</Text>
                <Button type="submit" colorScheme="blue">
                  Choose {name}
                </Button>
              </Box>
            );
          }
        )}
      </Flex>
    </Box>
  );
};

export default ChoosePokemon;
