import React from "react";
import { CardProps } from "./Card.types";
import { Wrapper } from "./Card.styles";

const Card = (props: CardProps, ref: React.Ref<HTMLDivElement>) => {
  const { children, ...otherProps } = props;

  return (
    <Wrapper ref={ref} {...otherProps}>
      {children}
    </Wrapper>
  );
};

export default React.forwardRef(Card);
