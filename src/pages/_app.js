import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { themes } from '../styles/themes';

export const ThemePreferenceContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState('light');
  const theme = themes[currentTheme];

  return (
    <>
      <Head>
        <title>Richard van Brunschot | Front-end Engineer</title>
      </Head>
      <ThemePreferenceContext.Provider
        value={{ currentTheme, setCurrentTheme }}
      >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </>
  );
}

export default MyApp;
