import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Header } from "./components";

const Layout = () => {
  return (
    <div className="bg-gray-200 dark:bg-slate-500">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
