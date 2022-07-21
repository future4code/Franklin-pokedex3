import styled from "styled-components";

export const PokeDiv = styled.div`
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Types = styled.span`
  display: inline;
  padding: 4px;
  margin: 4px;
  color: white;
  border-radius: 10px;
  background-color: ${(props) =>
    props.category === "normal"
      ? "#A8A878"
      : props.category === "fire"
      ? "#F08030"
      : props.category === "fighting"
      ? "#C03028"
      : props.category === "water"
      ? "#6890F0"
      : props.category === "flying"
      ? "#A890F0"
      : props.category === "grass"
      ? "#78C850"
      : props.category === "poison"
      ? "#A040A0"
      : props.category === "eletric"
      ? "#F8D030"
      : props.category === "ground"
      ? "#E0C068"
      : props.category === "psychic"
      ? "#F85888"
      : props.category === "rock"
      ? "#B8A038"
      : props.category === "ice"
      ? "#98D8D8"
      : props.category === "bug"
      ? "#A8B820"
      : props.category === "dragon"
      ? "#7038F8"
      : props.category === "ghost"
      ? "#705898"
      : props.category === "dark"
      ? "#705848"
      : props.category === "steel"
      ? "#B8B8D0"
      : props.category === "fairy"
      ? "#EE99AC"
      : "#68A090"};
`;

export const TypesDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PokeImageDiv = styled.div`
  height: 100px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PokeImageNumberDiv = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 1rem;
`;

export const PokeImage = styled.img`
  max-width: 80px;
  max-height: 100px;
`;

export const PokeButton = styled.button`
  width: 79px;
  background: #ed3237;
  color: white;
  border: none;
  margin: 6px;
  font-family: "Electrolize";
`;
