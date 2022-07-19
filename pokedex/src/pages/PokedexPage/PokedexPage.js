import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { PokedexButton } from "../../components/PokedexButton/PokedexButton";
import { FavoriteContext } from "../../context/favoritesContext";
import { goToHomePage } from "../../routes/coordinator";
import { PokedexGrid } from "../HomePage/styled";
import { ScreenContainer } from "./styledPokedex";

export const PokedexPage = () => {
  const { favorite, setFavorite } = React.useContext(FavoriteContext);
  const navigate = useNavigate();

  // console.log(setFavorite);

  useEffect(() => {
    const storedPoke = JSON.parse(localStorage.getItem("Favorites"));
    // console.log(storedPoke);
    setFavorite(storedPoke);
  }, []);

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
