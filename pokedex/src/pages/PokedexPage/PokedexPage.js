import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../../routes/coordinator";

export const PokedexPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>PokedexPage</h1>
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
