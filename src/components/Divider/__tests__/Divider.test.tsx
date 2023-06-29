import React from "react";
import { customRender } from "../../../../tests";
import { Divider } from "..";

describe("<Card />", () => {
  it("Should have a default css rules by default", () => {
    const { container } = customRender(<Divider />);

    expect(container).toMatchSnapshot();
  });
});
