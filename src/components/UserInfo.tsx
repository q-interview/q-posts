import React, { FC, ReactElement } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { generateTestId } from "../utils";

export interface UserInfoProps {
  name: string;
  postTitle?: string;
}

const UserInfo: FC<UserInfoProps> = ({ name, postTitle }): ReactElement => {
  return (
    <div className="flexCenter">
      <UserCircleIcon
        {...generateTestId(`${name}-icon`)}
        className="h-6 w-6 mr-2 "
      />
      <div>
        <p className="text-sm">{name}</p>
        {postTitle && <p className="text-sm">Title: {postTitle}</p>}
      </div>
    </div>
  );
};

export default UserInfo;
