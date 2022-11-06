import { createContext, Dispatch, useContext } from "react";
import { IPost } from "../@types/Post";
import { ENV } from "../env";

export type State = {
  savedPosts: IPost[];
  selectedUser: number;
  consoleMessage: string;
  dispatch: Dispatch<Action>;
};

export interface Action {
  type: string;
  payload?: IPost[] | number;
}

export const initialState: State = {
  savedPosts: [],
  consoleMessage: ENV.Q_CONSOLE_GREETING_MESSAGE,
  selectedUser: 0,
  dispatch: () => true,
};

export const Store = createContext<State>(initialState);
export const useStore = (): typeof initialState => useContext(Store);
