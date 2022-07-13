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
  width: 130px;
  margin-right: 15px;
`;

export const ArrowBackIconFixed = styled(ArrowBackIcon)``;
