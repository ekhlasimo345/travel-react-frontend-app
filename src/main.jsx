import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx'
import MapPage from './components/MapPage.jsx';
import AboutPage from './components/AboutPage.jsx';




const theme = createTheme({
  cssVariables: true,
  palette: {
   mode: 'dark'
  },
});

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={ import.meta.env.VITE_AUTH0_DOMAIN }
    clientId={ import.meta.env.VITE_AUTH0_CLIENT_ID}
    useRefreshTokens = {true}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <StrictMode>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<MapPage />}/>
              <Route path="about" element={<AboutPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>

      </ThemeProvider>

    </StrictMode>
  </Auth0Provider>

)
