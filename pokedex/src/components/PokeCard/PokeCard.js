import { PokeDiv } from "./styled";
import pokeball from "../../assets/pokeball-icon.png";

export const PokeCard = (props) => {
  return (
    <PokeDiv>
      <div>
        <img alt="pokeball" src={pokeball} /> {props.number}
      </div>
      <div>
        <img alt="imagem" src={props.img} />

        <p>{props.name}</p>
      </div>
      <div>
        <button>Botao 1</button>
        <button>Botao 2</button>
      </div>
    </PokeDiv>
  );
};
