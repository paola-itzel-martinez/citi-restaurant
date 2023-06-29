import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: 'default' }}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
