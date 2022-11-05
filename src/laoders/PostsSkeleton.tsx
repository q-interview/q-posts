import React, { FC } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import UserInfoSkeleton from "./UserInfoSkeleton";
import MessageSkeleton from "./MessageSkeleton";
import CommentsSkeleton from "./CommentsSkeleton";
import { SentryRefProp } from "../@types/SentryRef";

const PostsSkeleton: FC<SentryRefProp> = ({ sentryRef }) => {
  return (
    <>
      <div
        ref={sentryRef}
        className="w-full bg-slate-300 dark:bg-slate-600 rounded  shadow-xl dark:shadow-gray-600/50"
      >
        <div className="flexCenter justify-between p-1">
          <UserInfoSkeleton showTitle />
          <EllipsisVerticalIcon className="h-6 w-6 cursor-not-allowed" />
        </div>
        <hr className="bg-gray-900 dark:bg-gray-300" />
        <MessageSkeleton />
        <CommentsSkeleton />
      </div>
    </>
  );
};

export default PostsSkeleton;
