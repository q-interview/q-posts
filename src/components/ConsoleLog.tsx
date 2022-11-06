import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import { useStore } from "../store";

interface ConsoleLogProps {
  children: ReactNode;
  componentName: string;
}

const ConsoleLog: FC<ConsoleLogProps> = ({
  children,
  componentName,
}): ReactElement => {
  const { consoleMessage } = useStore();

  useEffect(() => {
    // I don't really like to have console logs left in my app, given this specific case
    // I had just disabled eslint for this part of the app!
    //eslint-disable-next-line
    console.log(`${consoleMessage} ${componentName}`);
  }, [componentName, consoleMessage]);

  return <>{children}</>;
};

export default ConsoleLog;
