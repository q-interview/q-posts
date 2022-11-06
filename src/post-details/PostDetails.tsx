import React, { FC, ReactElement } from "react";
import { IPost } from "../@types/Post";
import { IUser } from "../@types/User";
import { ConsoleLog, Message } from "../components";
import { useFetch } from "../hooks";
import { UserInfo, Comments } from "../components";
import { ENV } from "../env";

interface PostDetailsProps {
  post: IPost;
}

const PostDetails: FC<PostDetailsProps> = ({ post }): ReactElement => {
  const { data: user, loading: loadingUser } = useFetch<IUser>(
    `${ENV.Q_USERS_ROUTE}/${post.userId}`
  );
  return (
    <ConsoleLog componentName={PostDetails.name}>
      <section className="styledSection">
        <div className="postDetailsWrapper">
          <UserInfo
            loadingUser={loadingUser}
            name={user?.name ?? "Anonymous"}
          />
          <Message message={post.body} />
          <Comments postId={post.id} limit={ENV.Q_DEFAULT_LIMIT} />
        </div>
      </section>
    </ConsoleLog>
  );
};

export default PostDetails;
