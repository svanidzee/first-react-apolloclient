import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App";

const client = new ApolloClient({
  // constructor
  uri: "https://rickandmortyapi.com/graphql", // endpoint
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
