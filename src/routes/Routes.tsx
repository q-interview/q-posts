import { Routes as RoutesWrapper, Route } from "react-router-dom";
import config from "./config";

const Routes = () => {
  return (
    <RoutesWrapper>
      {config.map((mapProps) => (
        <Route {...mapProps} />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
