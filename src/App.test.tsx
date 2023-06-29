import React from "react";
import { customRender, screen } from "../tests";
import App from "./App";

jest.mock("./pages", () => ({
  Restaurants: () => <div data-testid="restaurants" />,
}));

describe("<App />", () => {
  it("Should show all data with specific styles rules", () => {
    customRender(<App />);

    expect(screen.getByTestId("restaurants")).toBeInTheDocument();
  });
});
