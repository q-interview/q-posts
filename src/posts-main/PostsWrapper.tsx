import React, { ReactElement, useEffect } from "react";
import { IPost } from "../@types/Post";
import { ConsoleLog, SectionWrapper } from "../components";
import { api } from "../consts";
import { usePagination } from "../hooks";
import { actions, useStore } from "../store";
import { Post } from "../posts-main";

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
      <ConsoleLog componentName={PostsWrapper.name}>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
        {hasMoreItems && <h1 ref={sentryRef}>Loading ...</h1>}
      </ConsoleLog>
    </SectionWrapper>
  );
};

export default PostsWrapper;
