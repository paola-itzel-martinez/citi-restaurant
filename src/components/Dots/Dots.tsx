import React from "react";
import { Dot, Wrapper } from "./Dots.styles";

const Dots = (
  _: any,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <Wrapper ref={ref}>
      <Dot />
      <Dot />
      <Dot />
    </Wrapper>
  );
};

export default React.forwardRef(Dots);
