import { Route, Routes } from "react-router-dom";
import { PokeDetailsPage } from "../pages/PokeDetailsPage/PokeDetailsPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";

function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/pokedex"} element={<PokedexPage />} />
      <Route path={"/pokemon/:name"} element={<PokeDetailsPage />} />
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default Router;
