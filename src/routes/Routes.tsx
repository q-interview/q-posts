import React from "react";
import { Routes as RoutesWrapper, Route } from "react-router-dom";
import config from "./config";

const Routes = () => {
  return (
    <RoutesWrapper>
      {config.map((mapProps) => (
        <Route {...mapProps} key={mapProps.key} />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
