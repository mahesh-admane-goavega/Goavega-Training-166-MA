import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // backgroundColor: "red",
          fontSize: "0.875rem",
          fontWeight: 600,
          textTransform: "capitalize",
          borderRadius: 2.5,
          "&.MuiButton-contained": {
            backgroundColor: "#009be5",
            "&:hover": {
              backgroundColor: "#006db3",
            },
          },
          "&.MuiButton-outlined": {
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  },
});
