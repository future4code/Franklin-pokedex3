import { PokeButton, PokeDiv, PokeImage, PokeImageDiv } from "./styled";
import pokeball from "../../assets/pokeball-icon.png";
import { getPokemonsDetails } from "../../services/getPokemonDetails";
import React, { useEffect, useState } from "react";
import { goToPokeDetailsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FavoriteContext } from "../../context/favoritesContext";

export const PokeCard = (props) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState();
  const [pokedexNumber, setPokedexNumber] = useState();
  const { favorite, setFavorite } = React.useContext(FavoriteContext);

  const onClickButton = (pokemon) => {
    goToPokeDetailsPage(navigate, pokemon);
  };

  const addFavorite = (pokemon) => {
    const myFavorites = [...favorite];
    const pokeIndex = myFavorites.indexOf(pokemon);
    myFavorites.includes(pokemon)
      ? myFavorites.splice(pokeIndex, 1)
      : myFavorites.push(pokemon);
    setFavorite(myFavorites);
  };

  useEffect(() => {
    const loadImage = async () => {
      const data = await getPokemonsDetails(props.name);
      setImageUrl(data.sprites.other.dream_world.front_default);
      setPokedexNumber(data.game_indices[19].game_index);
    };
    loadImage();
  }, [props.name]);

  return (
    <PokeDiv>
      <div>
        <img alt="pokeball" src={pokeball} /> {`0${pokedexNumber}`}
      </div>
      <PokeImageDiv>
        <PokeImage alt="imagem" src={imageUrl} />
        <p>{props.name}</p>
      </PokeImageDiv>
      <div>
        <PokeButton onClick={() => onClickButton(props.name)}>
          Detalhes
        </PokeButton>
        {favorite.includes(props.name) ? (
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
