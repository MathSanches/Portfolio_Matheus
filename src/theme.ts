import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#A9A9A9',
      },
      secondary: {
        main: '#696969',
      },
    },
    typography: {
        fontFamily: ("system-ui")
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;