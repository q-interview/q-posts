import React from "react";
import CommentsSkeleton from "./CommentsSkeleton";
import MessageSkeleton from "./MessageSkeleton";
import UserInfoSkeleton from "./UserInfoSkeleton";

const PostDetailsSkeleton = () => {
  return (
    <section className="styledSection">
      <div className="postDetailsWrapper">
        <UserInfoSkeleton />
        <MessageSkeleton />
        <CommentsSkeleton />
      </div>
    </section>
  );
};

export default PostDetailsSkeleton;
