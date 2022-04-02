import React from "react";
import { useCharacter } from "../hooks/useCharacters";

import {
  Box,
  Grid,
  Link as ChakraLink,
  Image,
  Heading,
  VStack,
} from "@chakra-ui/react";

const CharacterList = () => {
  const { error, loading, data } = useCharacter();
  console.log("CharacterList");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Ooops something went wrong...</div>;

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {data.characters.results.map((character, idx) => {
        return (
          <Box
            key={idx}
            m={10}
            bgColor="FFFFFF"
            borderRadius="10px"
            boxShadow="0 2px 20px rgba(0, 0, 0, 0.2)"
            overflow="hidden"
            width="300px"
          >
            <ChakraLink href={`/${character.id}`} key={idx}>
              <VStack spacing={5} mb={5}>
                <Image
                  src={character.image}
                  alt="Characters images"
                  fit="cover"
                />
                <Heading align="center" as="h2" fontSize={26} color="#2D3748">
                  {character.name}
                </Heading>
              </VStack>
            </ChakraLink>
          </Box>
        );
      })}
    </Grid>
  );
};

export default CharacterList;
