import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";
import { IUser } from "../../@types/User";
import { BrowserRouter } from "react-router-dom";

const usersMock: IUser[] = [
  {
    email: "test@test.com",
    id: 1,
    name: "test",
    username: "test",
  },
  {
    email: "test2@test.com",
    id: 2,
    name: "test2",
    username: "test2",
  },
];

jest.mock("../../http", () => ({
  http: jest.fn(() => Promise.resolve(usersMock)),
}));

const renderHeader = () => ({
  ...render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  ),
});

describe.skip("Header.tsx", () => {
  it("Renders header", () => {
    const { baseElement } = renderHeader();

    expect(baseElement).toBeInTheDocument();
  });

  it("Renders App name", () => {
    const { getByText } = renderHeader();

    const foundName = getByText("Posts");

    expect(foundName).toBeInTheDocument();
  });
});
