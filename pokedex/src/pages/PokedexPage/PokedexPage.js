import React from "react";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { PokedexButton } from "../../components/PokedexButton/PokedexButton";
import { FavoriteContext } from "../../context/favoritesContext";
import { goToHomePage } from "../../routes/coordinator";
import { PokedexGrid } from "../HomePage/styled";
import { ScreenContainer } from "./styledPokedex";

export const PokedexPage = () => {
  const { favorite } = React.useContext(FavoriteContext);
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <PokedexGrid>
        {favorite ? (
          favorite.map((pokemon) => {
            return <PokeCard name={pokemon} />;
          })
        ) : (
          <Loading />
        )}
      </PokedexGrid>
      <PokedexButton
        onClick={goToHomePage(navigate)}
        text={"POKEDEX COMPLETA"}
      />
    </ScreenContainer>
  );
};
