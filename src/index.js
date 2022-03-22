import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Users from './utils/users.json'
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
    }
  }
})

window.users = Users;

render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </BrowserRouter>
  </ThemeProvider>
  ,document.getElementById('root')
);

