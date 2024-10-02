import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#111',
      },
      secondary: {
        main: '#d2691e',
      },
    },
    typography: {
        fontFamily: ("Raleway")
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;