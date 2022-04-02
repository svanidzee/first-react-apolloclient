import { Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import { ChakraProvider } from "@chakra-ui/react";

import CharacterList from "./pages/CharacterList";
import theme from "./lib/theme";
import Layout from "./components/layouts/main";
import Search from "./components/Search";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/:id" element={<Character />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
