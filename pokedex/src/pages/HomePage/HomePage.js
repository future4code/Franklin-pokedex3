import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { goToPokeDetailsPage, goToPokedexPage } from "../../routes/coordinator";
import { ScreenContainer } from "./styled";

export const HomePage = () => {
  const navigate = useNavigate();

  const getPokemons = useRequestData([], `${BASE_URL}/pokemon`)[0].results;

  return (
    <ScreenContainer>
      {getPokemons &&
        getPokemons.map((pokemon, index) => {
          return (
            <div key={pokemon.name}>
              <p>{pokemon.name}</p>
              <button>Adicionar ao Pokedex</button>
              <button
                onClick={() => goToPokeDetailsPage(navigate, pokemon.name)}
              >
                Detalhes
              </button>
            </div>
          );
        })}
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
