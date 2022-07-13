import React, { useState } from "react";

export const FavoriteContext = React.createContext({});

export const FavoriteProvider = (props) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
