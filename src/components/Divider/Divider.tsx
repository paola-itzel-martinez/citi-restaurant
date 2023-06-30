import React from "react";
import { DividerVariant } from "../../types";
import { Wrapper } from "./Divider.styles";
import { DividerProps } from "./Divider.types";

const Divider = ({
  className,
  variant = DividerVariant.HORIZONTAL
}: DividerProps) => (
  <Wrapper className={className} variant={variant} />
);

export default React.memo(Divider);
