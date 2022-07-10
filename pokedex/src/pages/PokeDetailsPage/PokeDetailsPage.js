import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { goToLastPage } from "../../routes/coordinator";
import { PokeDetailsCard } from "./PokeDetailsCard";
import { CardGoBackButton, CardGoBackButtonDiv } from "./styled";

export const PokeDetailsPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const getPokemonDetail = useRequestData([], `${BASE_URL}/pokemon/${name}`);
  // console.log(getPokemonDetail);

  return (
    <div>
      {getPokemonDetail &&
        getPokemonDetail[0].length !== 0 &&
        getPokemonDetail.map((pokemon) => {
          console.log(pokemon);
          return (
            <PokeDetailsCard
              name={pokemon.name}
              hp={pokemon.stats[0].base_stat}
              attack={pokemon.stats[1].base_stat}
              defense={pokemon.stats[2].base_stat}
              specialAttack={pokemon.stats[3].base_stat}
              specialDefense={pokemon.stats[4].base_stat}
              speed={pokemon.stats[5].base_stat}
              image={pokemon.sprites.other.dream_world.front_default}
              key={pokemon.name}
              abilities={pokemon.abilities}
            />
          );
        })}

      <CardGoBackButtonDiv>
        <Button
          style={{ marginTop: 20, width: 300, marginBottom: 19 }}
          variant="contained"
          color="primary"
          onClick={() => {
            goToLastPage(navigate);
          }}
        >
          Voltar
        </Button>
      </CardGoBackButtonDiv>
    </div>
  );
};
