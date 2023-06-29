import React from "react";
import {
  YELP_FIXTURES,
  customRender,
  fireEvent,
  screen,
} from "../../../../tests";
import { BusinessCard } from "..";

const [BUSINESS] = YELP_FIXTURES.BUSINESSES;
const VIEW_BUTTON_TEXT = "View";
const WINDOW_OPEN_FN = jest.fn();

window.open = WINDOW_OPEN_FN;

const GeneralComponent = () => <BusinessCard {...BUSINESS} />;

describe("<BusinessCard />", () => {
  it('Should show all data with specific styles rules', () => {
    const { container } = customRender(<GeneralComponent />);

    expect(screen.getByText(BUSINESS.name)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('Should open a new tab when view button is clicked', () => {
    customRender(<GeneralComponent />);

    fireEvent.click(screen.getByText(VIEW_BUTTON_TEXT));

    expect(WINDOW_OPEN_FN).toBeCalledTimes(1);
  });
});
