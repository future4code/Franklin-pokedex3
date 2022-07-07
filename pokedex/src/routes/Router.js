import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokeDetailsPage } from "../pages/PokeDetailsPage/PokeDetailsPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/pokedex"} element={<PokedexPage />} />
        <Route path={"/pokemon"} element={<PokeDetailsPage />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
