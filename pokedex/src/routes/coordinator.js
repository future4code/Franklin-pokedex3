export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};
export const goToLastPage = (navigate) => {
  navigate(-1);
};
export const goToPokeDetailsPage = (navigate, name) => {
  navigate(`/pokemon/${name}`);
};
