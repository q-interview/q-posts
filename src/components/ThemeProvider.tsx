import React, { FC, ReactElement, useEffect, useState } from "react";
import { THEME_CHANGE } from "../events";
import { isThemeDark } from "../utils";
import ConsoleLog from "./ConsoleLog";

interface ThemeProviderProps {
  children: ReactElement;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }): ReactElement => {
  const [darkTheme, setDarkTheme] = useState(isThemeDark());

  useEffect(() => {
    const updateTheme = () => setDarkTheme(isThemeDark());

    window.addEventListener(THEME_CHANGE, updateTheme);

    return () => window.removeEventListener(THEME_CHANGE, updateTheme);
  }, []);

  return (
    <ConsoleLog componentName={ThemeProvider.name}>
      <div className={`${darkTheme && "dark"}`}>{children}</div>
    </ConsoleLog>
  );
};

export default ThemeProvider;
