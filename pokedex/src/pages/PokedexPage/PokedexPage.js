import React from "react";
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { PokedexButton } from "../../components/PokedexButton/PokedexButton";
import { FavoriteContext } from "../../context/favoritesContext";
import { PokedexGrid } from "../HomePage/styled";
import { ScreenContainer } from "./styledPokedex";

export const PokedexPage = () => {
  const { favorite } = React.useContext(FavoriteContext);

  return (
    <ScreenContainer>
      <PokedexGrid>
        {favorite &&
          favorite.map((pokemon) => {
            return <PokeCard key={pokemon.id} name={pokemon} />;
          })}
      </PokedexGrid>
      <PokedexButton text={"POKEDEX COMPLETA"} />
    </ScreenContainer>
  );
};
