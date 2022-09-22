import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#42855B",
    },
    secondary: {
      main: "#A5D6A7",
    },
    error: {
      main: red.A400,
    },
    background: {
      //default: "#a2b897"
      default: "white"
    }
  },
});

export default theme;
