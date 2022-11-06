/// <reference types="vite/client" />
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

interface ImportMetaEnv {
  readonly Q_API_BASE_URL: string;
  readonly Q_POSTS_ROUTE: string;
  readonly Q_USERS_ROUTE: string;
  readonly Q_COMMENTS_ROUTE: string;
  readonly Q_DEFAULT_LIMIT: number;
  readonly Q_COMMENTS_PER_POST_MAIN_PAGE: number;
  readonly Q_DEFAULT_METHOD: string;
  readonly Q_THEME_DARK: string;
  readonly Q_THEME_LIGHT: string;
  readonly Q_THEME_KEY: string;
  readonly Q_CONSOLE_GREETING_MESSAGE: string;
  readonly Q_THEME_CHANGE_EVENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ImportMetaEnv {
      readonly JEST_IS_NOT_COMPLICATED: string;
    }
  }
}

export {};
