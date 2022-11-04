import React, { FC, ReactElement } from "react";
import { IPost } from "../@types/Post";
import { IUser } from "../@types/User";
import { ConsoleLog, SectionWrapper } from "../components";
import { api } from "../consts";
import { useFetch } from "../hooks";
import { UserInfo, Comments } from "../components";

interface PostDetailsProps {
  post: IPost;
}

const PostDetails: FC<PostDetailsProps> = ({ post }): ReactElement => {
  const { data: user } = useFetch<IUser>(`${api.USERS_ROUTE}/${post.userId}`);
  return (
    <SectionWrapper>
      <ConsoleLog componentName={PostDetails.name}>
        <div className="border-2 border-black p-4">
          <UserInfo name={user?.name ?? "Anonymous"} />
          <h1 className="text-xl textColor">{post.title}</h1>
          <Comments postId={post.id} showAll limit={api.DEFAULT_LIMIT} />
        </div>
      </ConsoleLog>
    </SectionWrapper>
  );
};

export default PostDetails;
