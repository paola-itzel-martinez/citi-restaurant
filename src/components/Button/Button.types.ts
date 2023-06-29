import { HTMLAttributes } from "react";
import { ButtonVariant } from "../../types";

export interface ButtonCSS extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export interface ButtonProps extends ButtonCSS {
  children: any;
  className?: string;
}
