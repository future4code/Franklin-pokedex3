import styled from "styled-components";

export const PokedexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 25vh);
  grid-gap: 28px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

export const ScreenContainer = styled.div`
  margin-top: 50px;
`;

export const ButtonDiv = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

export const PokeButton = styled.button`
  height: 30px;
  background: #ed3237;
  color: white;
  border: none;
  margin: 6px;
`;
