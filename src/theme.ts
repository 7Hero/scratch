import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import React from "react";

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontFamily: true;
    largeText: true;
    smallText: true;
    mediumText: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    largeText: React.CSSProperties;
    smallText: React.CSSProperties;
    mediumText: React.CSSProperties;
}

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
    largeText:{
      fontFamily: 'Nunito',
      fontSize:40,
      fontWeight: 600
    },
    smallText:{
      fontFamily: 'Nunito',
      fontSize:15,
      fontWeight: 400,
      color: '#606060'
    },
    mediumText:{
      fontFamily: 'Nunito',
      fontSize:24,
      fontWeight:700
    },
  } as ExtendedTypographyOptions,
} as ThemeOptions)


export default theme;