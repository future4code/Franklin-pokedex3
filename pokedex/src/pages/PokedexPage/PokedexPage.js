import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

export const PokedexPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>PokedexPage</h1>
      <button
        onClick={() => {
          goToHomePage(navigate);
        }}
      >
        Voltar
      </button>
    </div>
  );
};
