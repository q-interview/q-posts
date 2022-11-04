import React from "react";
import { Navigate } from "react-router-dom";

const Redirect = () => {
  return <Navigate replace to="posts" />;
};

export default Redirect;
