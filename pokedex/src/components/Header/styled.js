import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const StyledToolbar = styled(Toolbar)`
  display: flex;
 flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const LogoImageStyled = styled.img`
  width: 200px;
  margin-right: 50px;
`;

export const ArrowBackIconFixed = styled(ArrowBackIcon)``;


export const BtnPokedex = styled.button`

  border: outset 3px;
  border-radius: 10px;
  background-color: #ED3237;
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;

`
