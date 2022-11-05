import React, { FC } from "react";

interface UserInfoSkeletonProps {
  showTitle?: boolean;
}

const UserInfoSkeleton: FC<UserInfoSkeletonProps> = ({ showTitle }) => {
  return (
    <div className="flexCenter">
      <div className="h-6 w-6 mr-2 rounded-full bg-gray-400 animate-pulse"></div>
      <div className="space-y-2">
        <div className="w-64 h-3 rounded-2xl bg-gray-400 animate-pulse"></div>
        {showTitle && (
          <div className="w-64 h-3 rounded-2xl bg-gray-400 animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default UserInfoSkeleton;
