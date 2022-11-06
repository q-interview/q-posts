import { ENV } from "../env";

export const fireThemeChange = () =>
  window.dispatchEvent(new Event(ENV.Q_THEME_CHANGE_EVENT));

export const setSelectedTheme = (checked: boolean) => {
  let theme = ENV.Q_THEME_LIGHT;

  if (checked) {
    theme = ENV.Q_THEME_DARK;
  }

  localStorage.setItem(ENV.Q_THEME_KEY, theme);
  fireThemeChange();
};
