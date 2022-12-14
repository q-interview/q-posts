import { IPost } from "../@types/Post";
import { Action } from "./initalState";

export const STORE_FETCHED_POSTS = "STORE_FETCHED_POSTS";
export const CHANGE_USER = "CHANGE_USER";

export const setFetchedPosts = (posts: IPost[]): Action => ({
  type: STORE_FETCHED_POSTS,
  payload: posts,
});

export const changeUser = (userId: number): Action => ({
  type: CHANGE_USER,
  payload: userId,
});
