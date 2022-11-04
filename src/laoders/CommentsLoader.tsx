import React, { FC, ReactElement } from "react";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { UseInfiniteScrollHookRefCallback } from "react-infinite-scroll-hook";

interface CommentsLoaderProps {
  sentryRef: UseInfiniteScrollHookRefCallback;
}

const CommentsLoader: FC<CommentsLoaderProps> = ({
  sentryRef,
}): ReactElement => {
  return (
    <div ref={sentryRef} className="flexCenter">
      <ArrowPathIcon className="h-6 w-6 animate-spin" />
    </div>
  );
};

export default CommentsLoader;
