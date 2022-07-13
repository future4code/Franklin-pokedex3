import { PokeButton, PokeDiv, PokeImage, PokeImageDiv } from "./styled";
import pokeball from "../../assets/pokeball-icon.png";
import { getPokemonsDetails } from "../../services/getPokemonDetails";
import { useEffect, useState } from "react";
import { goToPokeDetailsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const PokeCard = (props) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState();
  const [pokedexNumber, setPokedexNumber] = useState();

  const onClickButton = (pokemon) => {
    goToPokeDetailsPage(navigate, pokemon);
  };

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
        <PokeButton>Adicionar</PokeButton>
      </div>
    </PokeDiv>
  );
};
