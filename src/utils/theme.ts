import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#BA4A00",
    },
    secondary: {
      main: "#f9cc29",
    },
    error: {
      main: red.A400,
    },
    mode: "dark",
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: false,
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

export default theme;
