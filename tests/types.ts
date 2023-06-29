import { RenderOptions, RenderResult } from "@testing-library/react";

export type Hook = (props?: any) => any;

export type MeWrapperProps = {
  children: JSX.Element;
  addMeProvider?: boolean;
};

export type CustomWrapperProps = {
  children: React.ReactNode;
};

export type CustomRenderOptions = Omit<RenderOptions, "wrapper"> &
  Omit<CustomWrapperProps, "children">;

export type CustomRenderWrapperProps = {
  children: React.ReactElement;
};

export type CustomRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
) => RenderResult;

export type CustomRenderHookOptions = {
  hook: Hook;
  otherWrapper?: React.ElementType<{ children: React.ReactElement }>;
};
