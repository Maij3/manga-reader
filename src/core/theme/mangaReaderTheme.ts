import { createTheme } from "@mui/material";

export enum ThemePalette {
  BLACK = "#000000",
  WHITE = "#FFFFFF",
  RED = "#C30010"
}

export const mangaReaderTheme = createTheme({
  palette:{
    primary: {
      main:ThemePalette.BLACK 
    },
    secondary: {
      main: ThemePalette.WHITE
    },
    error: {
      main: ThemePalette.RED
    }
  }
})