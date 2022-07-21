import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ArrowBackIconFixed = styled(ArrowBackIcon)`
  color: ${(props) => (props.page === "home" ? "#ed3236" : "white")};
  &:hover,
  &:focus {
    transition: transform 0.2s;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  }
`;
