import { createTheme } from "@material-ui/core";
import { primaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    text: {
      main: "#000000",
    },
  },
});

export default theme;
