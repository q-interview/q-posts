import React, { FC, ReactElement } from "react";
import { IPost } from "../@types/Post";
import { IUser } from "../@types/User";
import Comments from "../components/comments";
import SectionWrapper from "../components/SectionWrapper";
import UserInfo from "../components/UserInfo";
import { api } from "../consts";
import { useFetch } from "../hooks";

interface PostDetailsProps {
  post: IPost;
}

const PostDetails: FC<PostDetailsProps> = ({ post }): ReactElement => {
  const { data: user } = useFetch<IUser>(`${api.USERS_ROUTE}/${post.userId}`);
  return (
    <SectionWrapper>
      <div className="border-2 border-black p-4">
        <UserInfo name={user?.name ?? "Anonymous"} />
        <h1 className="text-xl textColor">{post.title}</h1>
        <Comments postId={post.id} showAll limit={api.DEFAULT_LIMIT} />
      </div>
    </SectionWrapper>
  );
};

export default PostDetails;
