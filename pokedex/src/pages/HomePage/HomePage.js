import React from "react";
import { useNavigate } from "react-router-dom";
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { goToPokeDetailsPage, goToPokedexPage } from "../../routes/coordinator";
import { PokedexGrid, ScreenContainer } from "./styled";

export const HomePage = () => {
  const navigate = useNavigate();

  const getPokemons = useRequestData([], `${BASE_URL}/pokemon`)[0].results;

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
      <button
        onClick={() => {
          goToPokedexPage(navigate);
        }}
      >
        Pokedex
      </button>
      <button
        onClick={() => {
          goToPokeDetailsPage(navigate);
        }}
      >
        PokeDetailsPage
      </button>
    </ScreenContainer>
  );
};
