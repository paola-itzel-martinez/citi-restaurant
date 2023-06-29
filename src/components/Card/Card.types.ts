import { HTMLAttributes } from "react";

export interface CardCSS extends HTMLAttributes<HTMLDivElement> {}

export interface CardProps extends CardCSS {
  children: React.ReactNode;
}
