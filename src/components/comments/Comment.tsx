import React, { FC, ReactElement } from "react";
import { Message, UserInfo } from "../../components";
import ConsoleLog from "../ConsoleLog";
interface CommentProps {
  message: string;
  username: string;
}

const Comment: FC<CommentProps> = ({ message, username }): ReactElement => {
  return (
    <ConsoleLog componentName={Comment.name}>
      <div className="flex flex-col  p-4 pt-1">
        <UserInfo name={username} />
        <Message message={message} type="indentedSmall" />
      </div>
    </ConsoleLog>
  );
};

export default Comment;
