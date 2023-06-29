import React from "react";
import { render, screen } from "../../../../tests";
import { StarProps } from "../StarsRating.types";
import { StarsRating } from "..";

const GeneralComponent = (props: StarProps) => <StarsRating {...props} />;

describe("<StarsRating />", () => {
  it("Should have a specific css rules if has all stars filled", () => {
    const { container } = render(<GeneralComponent rating={5} />);

    expect(screen.getAllByTestId("filled-star")).toHaveLength(5);
    expect(container).toMatchSnapshot();
  });

  it("Should have a specific css rules if has a half star", () => {
    const { container } = render(<GeneralComponent rating={3.5} />);

    expect(screen.getAllByTestId("filled-star")).toHaveLength(3);
    expect(screen.getAllByTestId("half-star")).toHaveLength(1);
    expect(screen.getAllByTestId("empty-star")).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  it("Should have a specific css rules if has all stars empty", () => {
    const { container } = render(<GeneralComponent rating={0} />);

    expect(screen.getAllByTestId("empty-star")).toHaveLength(5);
    expect(container).toMatchSnapshot();
  });
});
