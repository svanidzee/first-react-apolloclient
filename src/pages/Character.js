import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

import { Box, Image, Heading, Text, Container } from "@chakra-ui/react";

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (error) return <div>Somethingwent wrong</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Container
      display="flex"
      flexDir="row"
      alignItems="flex-start"
      justifyContent="center"
      gap={10}
      color="#2D3748"
      maxW="700px"
    >
      <Image src={data.character.image} alt="Character images" fit="fill" />
      <Box>
        <Heading as="h1">{data.character.name}</Heading>
        {data?.character?.episode.map((episode, idx) => {
          return (
            <Text key={idx}>
              {episode.name} - <b />
              {episode.episode}
            </Text>
          );
        })}
      </Box>
    </Container>
  );
};

export default Character;
