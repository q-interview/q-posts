import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../@types/Post";
import { http } from "../http";
import { NotFound } from "../not-found";
import { actions, useStore } from "../store";
import { PostDetails } from "../post-details";
import { PostDetailsSkeleton } from "../loaders";
import { ENV } from "../env";

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
      http<IPost>({ route: `${ENV.Q_POSTS_ROUTE}/${params.postId}` })
        .then((data) => dispatch(actions.setFetchedPosts([data])))
        .finally(() => setLoading(false));
    }
  }, [dispatch, params.postId, storedPost]);

  if (loading) {
    return <PostDetailsSkeleton />;
  }

  if (storedPost) {
    return <PostDetails post={storedPost} />;
  }

  return <NotFound />;
};

export default PostPageSuspense;
