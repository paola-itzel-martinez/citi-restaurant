import React from "react";
import { customRender, screen } from "../../../../tests";
import { CardProps } from "../Card.types";
import { Card } from "..";

const CHILDREN = "Children";

const GeneralComponent = (props: Omit<CardProps, "children">) => (
  <Card {...props}>{CHILDREN}</Card>
);

describe("<Card />", () => {
  it("Should have a default css rules by default", () => {
    const { container } = customRender(<GeneralComponent />);

    expect(screen.getByText(CHILDREN)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
