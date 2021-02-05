import React from "react";
import { Box } from "@chakra-ui/react";

import Login from "./screens/Login";
import Auth from "./screens/Auth";

const loggedin = true;

function App() {
  return <Box>{loggedin ? <Auth /> : <Login />}</Box>;
}

export default App;
