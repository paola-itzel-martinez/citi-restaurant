import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { CustomRender } from "../types";

const ALL_PORTALS = ["app", "modal"];

const addAllPortals = () =>
  ALL_PORTALS.forEach((portal) => {
    let portalRoot = document.getElementById(portal);

    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.setAttribute("id", portal);
      document.body.appendChild(portalRoot);
    }
  });

export const customRender: CustomRender = (ui, renderOptions = {}) => {
  addAllPortals();

  const Wrapper = ({ children }: { children: React.ReactElement }) => (
    <ThemeProvider theme={{ mode: "default" }}>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
