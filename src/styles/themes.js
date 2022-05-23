const lightTheme = {
  background: '#fff',
  headerBackground: '#eff4f7',
  textColor: '#222',
};

const darkTheme = {
  background: '#191c2e',
  headerBackground: '#141624',
  textColor: '#d1d5e8',
};

const base = {
  accent: '#119d73',
  dark: '#222',
  font: `'Inter', 'sans-serif'`,
  gray: '#e1e1e1',
  white: '#fff',
};

export const themes = {
  light: { ...base, ...lightTheme },
  dark: { ...base, ...darkTheme },
};
