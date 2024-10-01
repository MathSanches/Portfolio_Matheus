import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#111',
      },
      secondary: {
        main: '#FFD700',
      },
    },
    typography: {
        fontFamily: ("Raleway")
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;