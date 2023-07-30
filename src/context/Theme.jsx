import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#75aadb",
      medium: "#6fbcff",
      light: "#c0e2ff",
    },
    secondary: {
      main: "#58595b",
      medium: "#808285",
      light: "#ffffff",
    },
  },
  typography: {
    fontFamily: 'Nunito',
  },
});

export {theme}
