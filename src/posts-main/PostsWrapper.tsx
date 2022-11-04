import React, { ReactElement, useEffect } from "react";
import { IPost } from "../@types/Post";
import SectionWrapper from "../components/SectionWrapper";
import { api } from "../consts";
import { usePagination } from "../hooks";
import { actions, useStore } from "../store";
import Post from "./Post";

const PostsWrapper = (): ReactElement => {
  const { dispatch, selectedUser } = useStore();

  const {
    items: posts,
    hasMoreItems,
    loadData,
    sentryRef,
  } = usePagination<IPost>({
    route: api.POSTS_ROUTE,
    limit: api.DEFAULT_LIMIT,
    apiFilters: `${selectedUser ? `&userId=${selectedUser}` : undefined}`,
  });

  useEffect(() => {
    loadData(true);
  }, [loadData, selectedUser]);

  useEffect(() => {
    dispatch(actions.setFetchedPosts(posts));
  }, [dispatch, posts]);

  return (
    <SectionWrapper>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {hasMoreItems && <h1 ref={sentryRef}>Loading ...</h1>}
    </SectionWrapper>
  );
};

export default PostsWrapper;
