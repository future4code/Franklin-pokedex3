import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { goToLastPage } from "../../routes/coordinator";

export const PokeDetailsPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const getPokemonDetail = useRequestData([], `${BASE_URL}/pokemon/${name}`);
  console.log(getPokemonDetail);

  return (
    <div>
      <h1>PokeDetailsPage</h1>
      {getPokemonDetail &&
        getPokemonDetail[0].length !== 0 &&
        getPokemonDetail.map((pokemon) => {
          // console.log(pokemon.sprites.other.dream_world.front_default);
          return (
            <div key={pokemon.name}>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Imagem do ${pokemon.name}`}
              />
            </div>
          );
        })}
      <button
        onClick={() => {
          goToLastPage(navigate);
        }}
      >
        Voltar
      </button>
    </div>
  );
};
