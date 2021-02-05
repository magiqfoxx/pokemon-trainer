import React from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";

export interface LoginProps {}

const Login: React.SFC<LoginProps> = () => {
  return (
    <Box>
      <Heading>Log in</Heading>
      <Input placeholder="email" />
      <Input placeholder="password" type="password" />
      <Button type="submit">Log in</Button>
    </Box>
  );
};

export default Login;
