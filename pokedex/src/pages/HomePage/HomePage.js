import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { PokedexButton } from "../../components/PokedexButton/PokedexButton";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { PokedexGrid, ScreenContainer } from "./styled";

export const HomePage = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const getPokemons = useRequestData(
    [],
    `${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`
  )[0].results;

  useEffect(() => {}, [offset, limit]);

  return (
    <ScreenContainer>
      <PokedexGrid>
        {getPokemons &&
          getPokemons.map((pokemon) => {
            return (
              <PokeCard key={pokemon.name} number={13} name={pokemon.name} />
            );
          })}
      </PokedexGrid>
      <PokedexButton text={"MINHA POKEDEX"} />
      <button
        onClick={() => {
          if (offset >= 20) setOffset(offset - 20);
        }}
      >
        Voltar Página
      </button>
      <button
        onClick={() => {
          if (offset < 1134) setOffset(offset + 20);
        }}
      >
        Próxima Página
      </button>
    </ScreenContainer>
  );
};
