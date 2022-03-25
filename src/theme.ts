import { createTheme, ThemeOptions, Theme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import React from "react";

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontFamily: true;
    largeText: true;
    smallText: true;
    mediumText: true;
    title: true;
    textGray: true;
    recipeTitle: true;
  }
}


interface ExtendedTypographyOptions extends TypographyOptions {
    largeText: React.CSSProperties;
    smallText: React.CSSProperties;
    mediumText: React.CSSProperties;
    title: React.CSSProperties;
    textGray: React.CSSProperties;
}

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
    largeText: {
      fontFamily: 'Nunito',
      fontSize:40,
      fontWeight: 600
    },
    smallText: {
      fontFamily: 'Nunito',
      fontSize:15,
      fontWeight: 400,
      color: '#606060'
    },
    mediumText: {
      fontFamily: 'Nunito',
      fontSize:24,
      fontWeight:700
    },
    title: {
      fontFamily: 'Nunito',
      fontSize: 17,
      fontWeight: 700,
      color:'black'
    },
    h4: {
      fontFamily: 'Nunito',
      fontSize: 20,
      fontWeight: 700,
      color:'black'
    },
    textGray: {
      fontFamily: 'Nunito',
      fontSize: 14,
      fontWeight: 600,
      color:'rgba(3, 15, 9, 0.5)'
    },
    recipeTitle:{
      fontFamili: 'Nunito',
      fontSize:18,
      fontWeight:600,
      color:'black'
    }
  } as ExtendedTypographyOptions,
} as ThemeOptions)


export default theme;