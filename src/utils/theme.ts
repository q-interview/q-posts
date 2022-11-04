import { theme } from "../consts";

export const isThemeDark = () =>
  localStorage.getItem(theme.THEME_KEY) === theme.DARK;
