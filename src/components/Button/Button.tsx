import React from "react";
import { Wrapper } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({ children, ...otherProps }: ButtonProps) => {
  return <Wrapper {...otherProps}>{children}</Wrapper>;
};

export default React.memo(Button);
