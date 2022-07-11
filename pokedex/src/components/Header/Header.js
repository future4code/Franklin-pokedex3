import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowBackIconFixed, LogoImageStyled, StyledToolbar } from "./styled";
import logo from "../../assets/logo-pokemon.png";
import { goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar>
          {/* <Button color="inherit">Voltar</Button> */}
          <ArrowBackIconFixed
            onClick={() => {
              goToHomePage(navigate);
            }}
          />
          <LogoImageStyled src={logo} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            f
          ></IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
