import React, { FC, ReactElement, useEffect, useState } from "react";
import { ENV } from "../env";
import { isThemeDark } from "../utils";
import ConsoleLog from "./ConsoleLog";

interface ThemeProviderProps {
  children: ReactElement;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }): ReactElement => {
  const [darkTheme, setDarkTheme] = useState(isThemeDark());

  useEffect(() => {
    const updateTheme = () => setDarkTheme(isThemeDark());

    window.addEventListener(ENV.Q_THEME_CHANGE_EVENT, updateTheme);

    return () =>
      window.removeEventListener(ENV.Q_THEME_CHANGE_EVENT, updateTheme);
  }, []);

  return (
    <ConsoleLog componentName={ThemeProvider.name}>
      <div className={`${darkTheme && "dark"}`}>{children}</div>
    </ConsoleLog>
  );
};

export default ThemeProvider;
