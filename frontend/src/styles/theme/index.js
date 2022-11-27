import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#9e9e9e",
  secondary: "#aed581",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiButton: {
        defaultProps: {
            // disableRipple: true,
            disableElevation: true,
        }
    }
  }
});

export default theme;
