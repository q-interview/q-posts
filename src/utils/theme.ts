import { ENV } from "../env";

export const isThemeDark = () =>
  localStorage.getItem(ENV.Q_THEME_KEY) === ENV.Q_THEME_DARK;
