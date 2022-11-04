import React, { FC, ReactElement } from "react";
import ConsoleLog from "./ConsoleLog";

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
  return (
    <ConsoleLog componentName={Message.name}>
      <p className={MESSAGE_STYLE[type]}>{message}</p>
    </ConsoleLog>
  );
};

export default Message;
