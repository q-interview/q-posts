import React, { FC, ReactElement } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import ConsoleLog from "./ConsoleLog";
import { UserInfoSkeleton } from "../loaders";

export interface UserInfoProps {
  name: string;
  postTitle?: string;
  loadingUser?: boolean;
}

const UserInfo: FC<UserInfoProps> = ({
  name,
  postTitle,
  loadingUser = false,
}): ReactElement => {
  if (loadingUser) {
    return <UserInfoSkeleton showTitle={!!postTitle} />;
  }

  return (
    <ConsoleLog componentName={UserInfo.name}>
      <div className="flexCenter">
        <UserCircleIcon className="h-6 w-6 mr-2 " />
        <div>
          <p className="text-sm">{name}</p>
          {postTitle && <p className="text-sm">Title: {postTitle}</p>}
        </div>
      </div>
    </ConsoleLog>
  );
};

export default UserInfo;
