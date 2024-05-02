import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { mangaReaderTheme } from "./mangaReaderTheme";

type ThemeProps = {
  children: React.ReactNode | React.ReactNode[];
}
function AppTheme({children}:ThemeProps){
  return (
    <ThemeProvider theme={mangaReaderTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
export { AppTheme}