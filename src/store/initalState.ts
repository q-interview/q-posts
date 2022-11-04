import { createContext, Dispatch, useContext } from "react";
import { IPost } from "../@types/Post";

export type State = {
  savedPosts: IPost[];
  selectedUser: number;
  dispatch: Dispatch<Action>;
};

export interface Action {
  type: string;
  payload?: IPost[] | number;
}

export const initialState: State = {
  savedPosts: [],
  selectedUser: 0,
  dispatch: () => true,
};

export const Store = createContext<State>(initialState);
export const useStore = (): typeof initialState => useContext(Store);
