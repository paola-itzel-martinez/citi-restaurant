import React from "react";
import { DividerVariant } from "../../types";
import { Wrapper } from "./Divider.styles";
import { DividerProps } from "./Divider.types";

const Divider = ({ variant = DividerVariant.HORIZONTAL }: DividerProps) => (
  <Wrapper variant={variant} />
);

export default React.memo(Divider);
