import React, { FC, ReactElement } from "react";
import { IComment } from "../../@types/Comment";
import { api } from "../../consts";
import { usePagination } from "../../hooks";
import { CommentsLoader } from "../../laoders";
import ConsoleLog from "../ConsoleLog";
import Comment from "./Comment";

interface CommentsWrapperProps {
  postId: number;
  limit?: number;
  showAll?: boolean;
}

const CommentsWrapper: FC<CommentsWrapperProps> = ({
  postId,
  limit,
  showAll = false,
}): ReactElement => {
  const {
    items: comments,
    hasMoreItems,
    sentryRef,
  } = usePagination<IComment>({
    route: `${api.POSTS_ROUTE}/${postId}/${api.COMMENTS_ROUTE}`,
    limit: limit ?? api.COMMENTS_PER_POST_MAIN_PAGE,
  });

  return (
    <ConsoleLog componentName={CommentsWrapper.name}>
      <div className="flex flex-col justify-center  ">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            message={comment.body}
            username={comment.email}
          />
        ))}
        {showAll && hasMoreItems && <CommentsLoader sentryRef={sentryRef} />}
      </div>
    </ConsoleLog>
  );
};

export default CommentsWrapper;
