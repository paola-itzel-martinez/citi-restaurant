import React from "react";
import { render, screen } from "../../../../tests";
import { TypographyVariant } from "../../../types";
import { TypographyProps } from "../Typography.types";
import { Typography } from "..";

const CHILDREN = "text";
const GeneralComponent = (props: Omit<TypographyProps, "children">) => (
  <Typography {...props}>{CHILDREN}</Typography>
);

describe("<StarsRating />", () => {
  it(`Should have a specific css rules if the variant is ${TypographyVariant.BUTTON}`, () => {
    const { container } = render(
      <GeneralComponent variant={TypographyVariant.BUTTON} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should have a specific css rules if the variant is ${TypographyVariant.BUTTON_MENU}`, () => {
    const { container } = render(
      <GeneralComponent variant={TypographyVariant.BUTTON_MENU} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should have a specific css rules if the variant is ${TypographyVariant.NORMAL}`, () => {
    const { container } = render(
      <GeneralComponent variant={TypographyVariant.BUTTON} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should have a specific css rules if the variant is ${TypographyVariant.SMALL}`, () => {
    const { container } = render(
      <GeneralComponent variant={TypographyVariant.BUTTON_MENU} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should have a specific css rules if the variant is ${TypographyVariant.TITLE}`, () => {
    const { container } = render(
      <GeneralComponent variant={TypographyVariant.BUTTON_MENU} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Should have a specific css rules if textAlign is assigned", () => {
    render(<GeneralComponent textAlign="center" />);

    expect(screen.getByText(CHILDREN)).toHaveStyleRule("text-align", "center");
  });

  it("Should have a specific css rules if color is assigned", () => {
    render(<GeneralComponent color="orange" />);

    expect(screen.getByText(CHILDREN)).toHaveStyleRule("color", "orange");
  });

  it("Should have a specific css rules if hasEllipsis is truthy", () => {
    render(<GeneralComponent hasEllipsis />);

    expect(screen.getByText(CHILDREN)).toHaveStyle(`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    `);
  });

  it("Should have a specific css rules if hasEllipsis is falsy", () => {
    render(<GeneralComponent />);

    expect(screen.queryByText(CHILDREN)).not.toHaveStyleRule(
      "text-overflow",
      "ellipsis"
    );

    expect(screen.queryByText(CHILDREN)).not.toHaveStyleRule(
      "overflow",
      "hidden"
    );

    expect(screen.queryByText(CHILDREN)).not.toHaveStyleRule(
      "white-space",
      "nowrap"
    );
  });
});
