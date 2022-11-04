import { createContext, Dispatch, useContext } from "react";
import { IPost } from "../@types/Post";

export type State = {
  darkTheme: boolean;
  savedPosts: IPost[];
  selectedUser: number;
  dispatch: Dispatch<Action>;
};

export interface Action {
  type: string;
  payload?: boolean | IPost[] | number;
}

export const initialState: State = {
  darkTheme: false,
  savedPosts: [],
  selectedUser: 0,
  dispatch: () => true,
};

export const Store = createContext<State>(initialState);
export const useStore = (): typeof initialState => useContext(Store);
