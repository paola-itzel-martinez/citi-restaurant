import React from "react";
import { render, screen } from "../../../../tests";
import { Image } from "..";

const ALT = "alt-image";
const SRC =
  "https://s3-media4.fl.yelpcdn.com/bphoto/Y70NLnzrDZ-vkW9xiTAM1Q/o.jpg";

const GeneralComponent = (props: any) => (
  <Image src={SRC} alt={ALT} {...props} />
);

describe("<Image />", () => {
  it("Should have a specific css rules for style prop", () => {
    render(<GeneralComponent style={{ backgroundColor: "black" }} />);

    expect(screen.getByAltText(ALT)).toHaveStyle(`
        background-color: black;
      `);
  });

  it("Should have a specific margin css rules if CSSMarginRules is assigned", () => {
    render(<GeneralComponent m={32} />);

    expect(screen.getByAltText(ALT)).toHaveStyle(`
        margin: 32px;
      `);
  });

  it("Should have a specific spacing css rules if CSSSpacingRules is assigned", () => {
    render(<GeneralComponent width={32} />);

    expect(screen.getByAltText(ALT)).toHaveStyle(`
        width: 32px;
      `);
  });

  it("Should be mandatory src and alt props", () => {
    render(<GeneralComponent />);

    const { src, alt } = screen.getByAltText(ALT) as HTMLImageElement;

    expect(src).toBe(SRC);
    expect(alt).toBe(ALT);
  });
});
