import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../@types/Post";
import { api } from "../consts";
import { http } from "../http";
import { NotFound } from "../not-found";
import { actions, useStore } from "../store";
import { PostDetails } from "../post-details";

const PostPageSuspense = () => {
  const params = useParams();
  const { savedPosts, dispatch } = useStore();

  const storedPost = useMemo(
    () => savedPosts.find((post) => post.id === parseInt(params.postId ?? "")),
    [params.postId, savedPosts]
  );

  const [loading, setLoading] = useState(!storedPost);

  useEffect(() => {
    if (!storedPost) {
      http<IPost>({ url: `${api.POSTS_ROUTE}/${params.postId}` })
        .then((data) => dispatch(actions.setFetchedPosts([data])))
        .finally(() => setLoading(false));
    }
  }, [dispatch, params.postId, storedPost]);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (storedPost) {
    return <PostDetails post={storedPost} />;
  }

  return <NotFound />;
};

export default PostPageSuspense;
