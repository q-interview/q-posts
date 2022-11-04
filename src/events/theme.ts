export const THEME_CHANGE = "THEME_CHANGE";

export const fireThemeChange = () =>
  window.dispatchEvent(new Event(THEME_CHANGE));

export const setSelectedTheme = (checked: boolean) => {
  let theme = "light";

  if (checked) {
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
  fireThemeChange();
};
