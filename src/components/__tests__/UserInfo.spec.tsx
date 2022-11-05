import React from "react";
import { render } from "@testing-library/react";
import UserInfo, { UserInfoProps } from "../UserInfo";

const renderUserInfo = (props: UserInfoProps) => ({
  ...render(<UserInfo {...props} />),
});

describe("UserInfo.tsx", () => {
  describe("Name testing", () => {
    ["Test", "Marko", "Bret", "Dragan", "Lorem Ipsum"].forEach((name) => {
      it(`should render name ${name}`, () => {
        const { getByText } = renderUserInfo({ name });

        const foundName = getByText(name);

        expect(foundName).toBeInTheDocument();
      });
    });
  });

  describe("Title Testing", () => {
    [
      "lorem ipsum",
      "hi this is a post",
      "You can do anything with this",
      "No matter how long the string is this one is pretty big right?!",
    ].forEach((postTitle, index) => {
      it(`${index} should render title`, () => {
        const { getByText } = renderUserInfo({
          name: "Marko",
          postTitle,
        });

        const findName = getByText("Marko");
        const findTitle = getByText(`Title: ${postTitle}`);

        expect(findName).toBeInTheDocument();
        expect(findTitle).toBeInTheDocument();
      });
    });
  });
});
