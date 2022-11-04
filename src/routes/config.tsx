import React from "react";
import { RouteProps } from "react-router-dom";
import { NotFound } from "../not-found";
import { DetailsSuspense } from "../post-details";
import { PostsWrapper } from "../posts-main";
import Redirect from "./utils/Redirect";

type RouteConfig = { key: string } & RouteProps;

const config: RouteConfig[] = [
  {
    path: "posts",
    key: "home-page",
    element: <PostsWrapper />,
  },
  {
    path: "posts/:postId",
    key: "post-details",
    element: <DetailsSuspense />,
  },
  {
    path: "/",
    key: "initial-page",
    element: <Redirect />,
  },
  {
    path: "*",
    key: "404-page",
    element: <NotFound />,
  },
];

export default config;
