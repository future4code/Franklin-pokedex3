import React, { useState } from "react";
import { PokedexButton } from "../../components/PokedexButton/PokedexButton";

export const PokedexPage = () => {
  const [pokedex, setPokedex] = useState([]);

  return (
    <div>
      <h1>PokedexPage</h1>
      <PokedexButton text={"POKEDEX COMPLETA"} />
    </div>
  );
};
