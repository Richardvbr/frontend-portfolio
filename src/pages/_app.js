import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'src/styles/globalStyles';
import { themes } from '../styles/themes';

export const ThemePreferenceContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState('light');
  const theme = themes[currentTheme];
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Richard van Brunschot | Front-end Developer</title>
      </Head>
      <ThemePreferenceContext.Provider
        value={{ currentTheme, setCurrentTheme }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </>
  );
}

export default MyApp;
