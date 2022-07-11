import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { goToPokeDetailsPage, goToPokedexPage } from "../../routes/coordinator";
import { PokedexGrid, ScreenContainer } from "./styled";

export const HomePage = () => {
  const navigate = useNavigate();
  const [pokemonName, setPokemonName] = useState("");

  const getPokemons = useRequestData([], `${BASE_URL}/pokemon`)[0].results;
  // const getPokemonsImage = useRequestData([], `${BASE_URL}/pokemon/${name}`);

  // const AllPokemons = () => {
  //   getPokemons &&
  //     getPokemons.map((pokemon, index) => {
  //       return (
  //         <div key={pokemon.name}>
  //           <PokeCard
  //             number={13}
  //             // img={getPokemonsImage(
  //             //   pokemon.sprites.other.dream_world.front_default
  //             // )}
  //             name={pokemon.name}
  //           />
  //         </div>
  //       );
  //     });
  // };

  return (
    <ScreenContainer>
      <PokedexGrid>
        {getPokemons &&
          getPokemons.map((pokemon, index) => {
            return (
              <div key={pokemon.name}>
                <PokeCard
                  number={13}
                  // img={getPokemonsImage(
                  //   pokemon.sprites.other.dream_world.front_default
                  // )}
                  name={pokemon.name}
                />
              </div>
            );
          })}
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
