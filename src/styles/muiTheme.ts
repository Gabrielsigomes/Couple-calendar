import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff4d6d", dark: "#ff335c" },
    secondary: { main: "#7c3aed" },
    info: { main: "#60a5fa" },
    background: { default: "#070a12", paper: "#111827" },
    text: { primary: "#f9fafb", secondary: "#9ca3af" },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  components: {
    MuiTextField: { defaultProps: { variant: "outlined" } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(13, 18, 32, 0.86)",
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#ff4d6d" },
          "&.Mui-focused": { boxShadow: "0 0 0 4px rgba(255, 77, 109, 0.12)" },
        },
      },
    },
  },
});
