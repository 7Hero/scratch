import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import Users from './utils/users.json'
import theme from './theme'

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

