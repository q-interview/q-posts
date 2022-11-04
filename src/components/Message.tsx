import React, { FC, ReactElement } from "react";

const MESSAGE_STYLE = {
  indentedSmall: "indentedSmall",
  normalMessage: "normalMessage",
};

export interface MessageProps {
  message: string;
  type?: keyof typeof MESSAGE_STYLE;
}

const Message: FC<MessageProps> = ({
  message,
  type = "normalMessage",
}): ReactElement => {
  return <p className={MESSAGE_STYLE[type]}>{message}</p>;
};

export default Message;
