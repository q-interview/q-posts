import React, { FC, ReactElement } from "react";
import { useStore } from "../store";

interface ThemeProviderProps {
  children: ReactElement;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }): ReactElement => {
  const { darkTheme } = useStore();

  //Tu du still
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("darkTheme") ?? false;

  //   dispatch(actions.setDifferentTheme(!!savedTheme));

  //   return () => localStorage.setItem("darkTheme", JSON.stringify(darkTheme));

  //   //eslint-disable-next-line
  // }, []);

  return <div className={`${darkTheme && "dark"}`}>{children}</div>;
};

export default ThemeProvider;
