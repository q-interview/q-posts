import React, { FC, ReactElement } from "react";
import { IPost } from "../@types/Post";
import { Message, Comments, UserInfo } from "../components";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks";
import { IUser } from "../@types/User";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { ENV } from "../env";

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }): ReactElement => {
  const navigate = useNavigate();

  const { data: user, loading: loadingUser } = useFetch<IUser>(
    `${ENV.Q_USERS_ROUTE}/${post.userId}`
  );

  const handlePostDetails = () => navigate(`${post.id}`);

  return (
    <div className="w-full bg-slate-300 dark:bg-slate-600 rounded  shadow-xl dark:shadow-gray-600/50">
      <div
        onClick={handlePostDetails}
        className="flexCenter justify-between p-1 cursor-pointer"
      >
        <UserInfo
          loadingUser={loadingUser}
          name={user?.name ?? "Deleted User"}
          postTitle={post.title}
        />
        <EllipsisVerticalIcon className="h-6 w-6 cursor-not-allowed" />
      </div>
      <hr className="bg-gray-900 dark:bg-gray-300" />
      <Message message={post.body} />
      <Comments postId={post.id} />
    </div>
  );
};

export default Post;
