import React from "react";

import ChoosePokemon from "./ChoosePokemon";
import Dashboard from "./Dashboard";

const newUser = false;
const pokemon = {
  name: "Bulbasaur",
  exp: 5,
  money: 1,
};
export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  return newUser ? <ChoosePokemon /> : <Dashboard pokemon={pokemon} />;
};

export default Auth;
