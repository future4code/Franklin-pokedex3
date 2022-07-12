import styled from "styled-components";

export const PokeDiv = styled.div`
  width: 198px;
  height: 258px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const PokeImageDiv = styled.div`
  height: 100px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;
