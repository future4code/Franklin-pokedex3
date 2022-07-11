import styled from "styled-components";
import { Button, Divider, List } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  height: 70px;
  justify-content: space-between;
`;

export const LogoImageStyled = styled.img`
  width: 120px;
  margin-right: 15px;
`;

export const ArrowBackIconFixed = styled(ArrowBackIcon)``;

// export const ListStyled = styled(List)`
//   height: 100vh;
//   background: #080c1f;
// `;

// export const ChevronDiv = styled.div`
//   background-color: #a89a3b;
// `;

// export const ChevronRightIconWhite = styled(ChevronRight)`
//   color: white;
// `;

// export const DividerListDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 170px;
// `;

// export const DividerColor = styled(Divider)`
//   background-color: #a89a3b;
// `;

// export const ListButton = styled(Button)`
//   color: #dcdcdc;
// `;
