import styled from "styled-components";

export const CardImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

export const CardMediaStyled = styled.img`
  width: 300px;
  height: 250px;
`;

export const CardGoBackButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const TypesDiv = styled.div`
  max-width: 223px;
  margin: 0 auto;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 15px;
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

export const MovesDiv = styled.div`
  background-color: lightblue;
  max-width: 223px;
  margin: 0 auto;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
