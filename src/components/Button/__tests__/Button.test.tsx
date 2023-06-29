import React from "react";
import { customRender, fireEvent, screen } from "../../../../tests";
import { ButtonVariant } from "../../../types";
import { ButtonProps } from "../Button.types";
import { Button } from "..";

const CHILDREN = "Children";

const GeneralComponent = (props: Omit<ButtonProps, "children">) => (
  <Button {...props}>{CHILDREN}</Button>
);

describe("<Button />", () => {
  it(`Should show the label`, () => {
    customRender(<GeneralComponent variant={ButtonVariant.CARD} />);

    expect(screen.getByText(CHILDREN)).toBeInTheDocument();
  });

  it(`Should have a default css rules when variant prop is ${ButtonVariant.CARD}`, () => {
    const { container } = customRender(
      <GeneralComponent variant={ButtonVariant.CARD} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should have a default css rules when variant prop is ${ButtonVariant.MENU}`, () => {
    const { container } = customRender(
      <GeneralComponent variant={ButtonVariant.MENU} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should call the onClick function when its clicked`, () => {
    const MOCK_ON_CLICK = jest.fn();

    customRender(
      <GeneralComponent variant={ButtonVariant.MENU} onClick={MOCK_ON_CLICK} />
    );

    fireEvent.click(screen.getByText(CHILDREN));

    expect(MOCK_ON_CLICK).toBeCalledTimes(1);
  });
});
