import { Box, Container } from "@chakra-ui/react";

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
