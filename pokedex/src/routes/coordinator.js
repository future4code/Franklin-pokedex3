export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};
export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToPokeDetailsPage = (navigate, name) => {
  navigate(`/pokemon/${name}`);
};
