import { useState } from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { JokeContainer } from './components/JokeContainer';
import { ThemeChanger } from './components/ThemeChanger';

export const App = () => {
  let [themeChangerVisibility, setThemeChangerVisibility] = useState(false);
  let [theme, setTheme] = useState('catppuccin-mocha');

  const changeTheme = () => {};

  return (
    <div>
      <ThemeChanger changeThemeFunction={changeTheme} />
      <Header
        onClick={() => {
          setThemeChangerVisibility(true);
        }}
      />
      <About />
      <JokeContainer />
    </div>
  );
};
