import React, { useEffect, useContext } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

import { ThemePreferenceContext } from 'src/pages/_app';

import * as S from './style';

const ThemeToggle = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemePreferenceContext);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    // Check if theme exists in localStorage, if not, then check if user has a preferred color scheme, light theme as fallback
    if (!theme) {
      const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setCurrentTheme(themeQuery.matches ? 'dark' : 'light');
      localStorage.setItem(
        'theme',
        JSON.stringify(themeQuery.matches ? 'dark' : 'light')
      );
    } else {
      setCurrentTheme(JSON.parse(theme));
    }
  }, [setCurrentTheme]);

  const handleChange = (e) => {
    let theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', JSON.stringify(theme));
    setCurrentTheme(theme);
  };

  return (
    <div>
      <S.Slider
        type='checkbox'
        checked={currentTheme === 'dark'}
        onChange={handleChange}
        id='checkbox_theme'
      />

      <S.Label htmlFor='checkbox_theme'>
        <S.Ball />
        <FaMoon color={'f39c12'} size={15} />
        <BsFillSunFill color={'f39c12'} size={18} />
      </S.Label>
    </div>
  );
};

export default ThemeToggle;
