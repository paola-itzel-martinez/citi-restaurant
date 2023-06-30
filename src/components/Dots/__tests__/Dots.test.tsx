import React from "react";
import { customRender } from "../../../../tests";
import { Dots } from "..";

describe("<Dots />", () => {
  it('Should show all data with specific styles rules', () => {
    const { container } = customRender(<Dots />);

    expect(container).toMatchSnapshot();
  });
});
