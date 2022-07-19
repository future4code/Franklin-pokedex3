import pokedexImage from "../../assets/pokedexImage.png";
import { Typography } from "@mui/material";
import { PokedexImage, PokeButton } from "./styled";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const PokedexButton = (props) => {
  const { text } = props;
  const navigate = useNavigate();
  return (
    <PokeButton
      onClick={() => {
        text === "MINHA POKEDEX"
          ? goToPokedexPage(navigate)
          : goToHomePage(navigate);
      }}
    >
      <PokedexImage src={pokedexImage} />
      <Typography
        width={65}
        variant={"h6"}
        color={"#ED3237"}
        fontFamily={"Electrolize"}
        style={{ wordBreak: "break-word", fontSize: 12, lineHeight: 1.3 }}
      >
        {text}
      </Typography>
    </PokeButton>
  );
};
