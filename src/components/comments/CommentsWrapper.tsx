import React, { FC, ReactElement } from "react";
import { IComment } from "../../@types/Comment";
import { api } from "../../consts";
import { usePagination } from "../../hooks";
import { CommentsSkeleton } from "../../laoders";
import ConsoleLog from "../ConsoleLog";
import Comment from "./Comment";

interface CommentsWrapperProps {
  postId: number;
  limit?: number;
}

const CommentsWrapper: FC<CommentsWrapperProps> = ({
  postId,
  limit,
}): ReactElement => {
  const {
    items: comments,
    loading,
    hasNextPage,
    loadData,
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
        {loading && <CommentsSkeleton />}
        {hasNextPage && (
          <button
            className="p-4 hover:text-blue-400 "
            onClick={() => loadData()}
          >
            Load more comments
          </button>
        )}
      </div>
    </ConsoleLog>
  );
};

export default CommentsWrapper;
