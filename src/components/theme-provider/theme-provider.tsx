import * as React from 'react';
import { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { getThemeByName } from '../../themes/base';

interface Props {
  children: React.ReactNode,
}
/* eslint-disable */

const ThemeProvider: React.FunctionComponent<Props> = (props: Props) => {
  // State to hold the selected theme name
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme';

  const [themeName, _setThemeName] = useState(curThemeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  // Retrieve the theme object by theme name
  const theme = getThemeByName(themeName);

  return (
        <ThemeContext.Provider value={setThemeName}>
            <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
        </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext((themeName: string): void => {});

export default ThemeProvider;
