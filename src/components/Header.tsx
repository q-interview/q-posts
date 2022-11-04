import React, { ChangeEvent, ReactElement } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { setSelectedTheme } from "../events";
import { isThemeDark } from "../utils";
import { UserFilter, CustomCheck } from "../components";
import ConsoleLog from "./ConsoleLog";

const Header = (): ReactElement => {
  const navigate = useNavigate();
  const darkTheme = isThemeDark();

  const handleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const eventState = event.currentTarget.checked;

    setSelectedTheme(eventState);
  };

  const handleClickOnHeading = () => navigate("posts");

  return (
    <ConsoleLog componentName={Header.name}>
      <nav className="sticky top-0 z-30 w-full px-2 py-4 bg-white dark:bg-black sm:px-4 shadow-xl">
        <div className="flex justify-between items-center mx-24">
          <h1
            className="text-lg cursor-pointer textColor"
            onClick={handleClickOnHeading}
          >
            Posts
          </h1>
          <UserFilter />
          <div className="flexCenter">
            <SunIcon className="headerIcons textColor" />
            <CustomCheck
              inputProps={{
                onChange: handleTheme,
                defaultChecked: darkTheme,
              }}
            />
            <MoonIcon className="headerIcons textColor" />
          </div>
        </div>
      </nav>
    </ConsoleLog>
  );
};

export default Header;
