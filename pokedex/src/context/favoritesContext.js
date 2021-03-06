import React, { useState } from "react";

export const FavoriteContext = React.createContext({});

export const FavoriteProvider = (props) => {
  const [favorite, setFavorite] = useState([]);
  const [page, setPage] = useState("home");

  // useEffect(() => {
  //   setFavorite(JSON.parse(localStorage.getItem("Favorites")));
  // }, []);

  const addFavorite = (pokemon) => {
    const myFavorites = [...favorite];
    const pokeIndex = myFavorites.indexOf(pokemon);
    myFavorites.includes(pokemon)
      ? myFavorites.splice(pokeIndex, 1)
      : myFavorites.push(pokemon);
    localStorage.setItem("Favorites", JSON.stringify(myFavorites));
    setFavorite(JSON.parse(localStorage.getItem("Favorites")));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorite, setFavorite, addFavorite, page, setPage }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};
