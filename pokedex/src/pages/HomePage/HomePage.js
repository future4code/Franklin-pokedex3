import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { goToPokeDetailsPage, goToPokedexPage } from "../../routes/coordinator";

export const HomePage = () => {
  const navigate = useNavigate();

  const getPokemons = useRequestData([], `${BASE_URL}/pokemon`).results;
  console.log(getPokemons);

  return (
    <div>
      <h1>HomePage</h1>
      {getPokemons &&
        getPokemons.map((pokemon, index) => {
          return <p key={pokemon.name}>{`${index}: ${pokemon.name} `}</p>;
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
    </div>
  );
};
