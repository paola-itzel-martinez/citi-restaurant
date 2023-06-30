import { renderHook } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { CustomRenderHookOptions, CustomRenderWrapperProps } from "../types";

export const customRenderHook = ({
  hook,
  otherWrapper: OtherWrapper,
}: CustomRenderHookOptions) => {
  const Wrapper = ({ children }: CustomRenderWrapperProps) => (
    <ThemeProvider theme={{ mode: "default" }}>
      {OtherWrapper !== undefined ? (
        <OtherWrapper>{children}</OtherWrapper>
      ) : (
        children
      )}
    </ThemeProvider>
  );

  return {
    ...renderHook(() => hook(), {
      wrapper: Wrapper,
    }),
  };
};
