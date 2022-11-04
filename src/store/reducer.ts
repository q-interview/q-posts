import { IPost } from "../@types/Post";
import { CHANGE_USER, STORE_FETCHED_POSTS, THEME_CHANGE } from "./actions";
import { Action, State } from "./initalState";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case THEME_CHANGE:
      return { ...state, darkTheme: action.payload as boolean };
    case STORE_FETCHED_POSTS:
      return { ...state, savedPosts: action.payload as IPost[] };
    case CHANGE_USER:
      return { ...state, selectedUser: action.payload as number };
    default:
      return state;
  }
};
