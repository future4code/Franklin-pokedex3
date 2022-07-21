import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { LogoImageStyled, StyledToolbar } from "./styled";
import logo from "../../assets/logo-pokemon.png";
import { goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import ArrowBackHeaderIcon from "../ArrowBackHeaderIcon/ArrowBackHeaderIcon";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar>
          <ArrowBackHeaderIcon />
          <LogoImageStyled
            onClick={() => {
              goToHomePage(navigate);
            }}
            src={logo}
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
