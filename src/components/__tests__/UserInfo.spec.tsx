import { render } from "@testing-library/react";
import UserInfo, { UserInfoProps } from "../UserInfo";

const renderUserInfo = (props: UserInfoProps) => ({
  ...render(<UserInfo {...props} />),
});

describe("UserInfo.tsx", () => {
  describe("Name testing", () => {
    it("should render users name", () => {
      const { getByText } = renderUserInfo({ name: "Marko" });

      const foundText = getByText("Marko");

      expect(foundText).toBeInTheDocument();
    });
  });
});
