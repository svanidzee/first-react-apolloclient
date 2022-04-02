import React, { useCallback, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

import { Box, Button, Container, Input, chakra } from "@chakra-ui/react";

const GET_CHRCTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const handleOnChangeInput = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const [getLocations, { loading, error, data }] = useLazyQuery(
    GET_CHRCTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  const onButtonHandler = useCallback(() => {
    getLocations();
  }, [getLocations]);

  return (
    <Container
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Input
          value={name}
          onChange={handleOnChangeInput}
          placeholder="Type Character"
          bg="white"
          color="gray.500"
          _placeholder={{ opacity: 1, color: "gray.500" }}
          width="auto"
          htmlSize={14}
          variant="outline"
        />
        <Button onClick={onButtonHandler} colorScheme="red">
          Search
        </Button>
      </Box>
      {loading && <div>spinner...</div>}
      {error && <div>something went wrong...</div>}
      <Box mt={3}>
        {data && (
          <chakra.ul color="gray.500">
            {data?.characters?.results.map((character, idx) => {
              return (
                <chakra.li listStyleType="none" key={idx}>
                  {character.location.name}
                </chakra.li>
              );
            })}
          </chakra.ul>
        )}
      </Box>
    </Container>
  );
};

export default Search;
