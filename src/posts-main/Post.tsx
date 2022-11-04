import React, { FC, ReactElement } from "react";
import { IPost } from "../@types/Post";
import { Message, Comments, UserInfo } from "../components";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks";
import { IUser } from "../@types/User";
import { api } from "../consts";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }): ReactElement => {
  const navigate = useNavigate();

  const { data: user } = useFetch<IUser>(`${api.USERS_ROUTE}/${post.userId}`);

  const handlePostDetails = () => navigate(`${post.id}`);

  return (
    <div
      onClick={handlePostDetails}
      className="w-full bg-slate-300 dark:bg-slate-600 rounded cursor-pointer shadow-xl dark:shadow-gray-600/50"
    >
      <div className="flexCenter justify-between p-1">
        <UserInfo name={user?.name ?? "Deleted User"} postTitle={post.title} />
        <EllipsisVerticalIcon className="h-6 w-6 cursor-not-allowed" />
      </div>
      <hr className="bg-gray-900 dark:bg-gray-300" />
      <Message message={post.body} />
      <Comments postId={post.id} />
    </div>
  );
};

export default Post;
