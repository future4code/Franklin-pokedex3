import styled from "styled-components";

export const PokeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  border: none;
  right: 15px;
  bottom: 25px;
  z-index: 3;
  background-color: transparent;
  &:hover,
  &:focus {
    transition: transform .1s;
    transform: scale(1.1);
  }
  &:active{
    transform: scale(1.05);
  }
`;

export const PokedexImage = styled.img`
  width: 60px;
  margin-bottom: 5px;
`;
