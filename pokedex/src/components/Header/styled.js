import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: space-between;
`;

export const LogoImageStyled = styled.img`
  width: 120px;
  margin-right: 15px;
`;

export const ArrowBackIconFixed = styled(ArrowBackIcon)``;
