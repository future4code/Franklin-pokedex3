import {
  PokeButton,
  PokeDiv,
  PokeImage,
  PokeImageDiv,
  PokeImageNumberDiv,
} from "./styled";
import pokeball from "../../assets/pokeball-icon.png";
import { getPokemonsDetails } from "../../services/getPokemonDetails";
import React, { useEffect, useState } from "react";
import { goToPokeDetailsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FavoriteContext } from "../../context/favoritesContext";
import { Typography } from "@mui/material";

export const PokeCard = (props) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState();
  const [pokedexNumber, setPokedexNumber] = useState();
  const { favorite, addFavorite } = React.useContext(FavoriteContext);

  console.log(favorite);

  const onClickButton = (pokemon) => {
    goToPokeDetailsPage(navigate, pokemon);
  };

  // const addFavorite = (pokemon) => {
  //   const myFavorites = [...favorite];
  //   const pokeIndex = myFavorites.indexOf(pokemon);
  //   myFavorites.includes(pokemon)
  //     ? myFavorites.splice(pokeIndex, 1)
  //     : myFavorites.push(pokemon);
  //   setFavorite(myFavorites);
  // };

  useEffect(() => {
    const loadImage = async () => {
      const data = await getPokemonsDetails(props.name);
      data.game_indices.length !== 0
        ? setImageUrl(data.sprites.other.dream_world.front_default)
        : setImageUrl(data.sprites.front_default);
      // setPokedexNumber(data.game_indices[19].game_index);
      setPokedexNumber(data.id);
    };
    loadImage();
  }, [props.name]);

  return (
    <PokeDiv>
      <PokeImageNumberDiv>
        <img alt="pokeball" src={pokeball} />
        <Typography
          fontSize={20}
          marginLeft={1}
          fontFamily={"Electrolize"}
          color={"black"}
          style={{ fontWeight: 300 }}
        >{`0${pokedexNumber}`}</Typography>
      </PokeImageNumberDiv>
      <PokeImageDiv>
        <PokeImage alt="imagem" src={imageUrl} />
        <Typography
          marginTop={2}
          fontFamily={"Electrolize"}
          style={{ textTransform: "capitalize" }}
        >
          {props.name}
        </Typography>
      </PokeImageDiv>
      <div>
        <PokeButton onClick={() => onClickButton(props.name)}>
          Detalhes
        </PokeButton>
        {favorite && favorite.includes(props.name) ? (
          <PokeButton onClick={() => addFavorite(props.name)}>
            Remover
          </PokeButton>
        ) : (
          <PokeButton onClick={() => addFavorite(props.name)}>
            Adicionar
          </PokeButton>
        )}
      </div>
    </PokeDiv>
  );
};
