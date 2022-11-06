import React from "react";
import MessageSkeleton from "./MessageSkeleton";
import UserInfoSkeleton from "./UserInfoSkeleton";

const CommentsSkeleton = () => {
  return (
    <>
      {[...Array(2).keys()].map((element) => (
        <div
          key={`${element}-comments-loader`}
          className="flex flex-col p-4 pt-1"
        >
          <UserInfoSkeleton />
          <MessageSkeleton />
        </div>
      ))}
    </>
  );
};

export default CommentsSkeleton;
