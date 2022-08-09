import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {theme} from './themes/Theme'
import {ThemeProvider} from "@mui/material";
import {AppProvider} from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <AppProvider>
              <App />
          </AppProvider>
      </ThemeProvider>
  </React.StrictMode>
);
