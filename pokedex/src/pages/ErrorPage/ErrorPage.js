import React from "react";
import { FavoriteContext } from "../../context/favoritesContext";

export const ErrorPage = () => {
  const { setPage } = React.useContext(FavoriteContext);
  setPage("error");

  return <h1>ErrorPage</h1>;
};
