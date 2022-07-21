import React from "react";
import { useNavigate } from "react-router-dom";
import { FavoriteContext } from "../../context/favoritesContext";
import { goToHomePage } from "../../routes/coordinator";
import { ArrowBackIconFixed } from "./styled";

const ArrowBackHeaderIcon = () => {
  const navigate = useNavigate();
  const { page } = React.useContext(FavoriteContext);

  return (
    <ArrowBackIconFixed
      page={page}
      onClick={() => {
        goToHomePage(navigate);
      }}
    />
  );
};

export default ArrowBackHeaderIcon;
