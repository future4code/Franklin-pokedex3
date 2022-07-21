import React, { useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { PokedexButton } from "../../components/PokedexButton/PokedexButton";
import { FavoriteContext } from "../../context/favoritesContext";
import { PokedexGrid } from "../HomePage/styled";
import { ScreenContainer } from "./styledPokedex";

export const PokedexPage = () => {
  const { favorite, setFavorite } = React.useContext(FavoriteContext);
  const { setPage } = React.useContext(FavoriteContext);

  setPage("pokedex");

  useEffect(() => {
    const storedPoke = JSON.parse(localStorage.getItem("Favorites"));
    setFavorite(storedPoke);
  }, []);

  return (
    <ScreenContainer>
      <PokedexGrid>
        {favorite ? (
          favorite.map((pokemon) => {
            return <PokeCard key={pokemon} name={pokemon} />;
          })
        ) : (
          <Loading />
        )}
      </PokedexGrid>
      <PokedexButton text={"POKEDEX COMPLETA"} />
    </ScreenContainer>
  );
};
