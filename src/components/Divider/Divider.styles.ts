import styled from "styled-components";
import theme from "styled-theming";
import { palette } from "../../styled";
import { DividerVariant } from "../../types";
import { DividerProps } from "./Divider.types";

const borderWidth = theme.variants("mode", "variant", {
  [DividerVariant.HORIZONTAL]: { default: "0px 0px thin" },
  [DividerVariant.VERTICAL]: { default: "0px thin 0px 0px" },
});

const alignSelf = theme.variants("mode", "variant", {
  [DividerVariant.HORIZONTAL]: { default: "undefined" },
  [DividerVariant.VERTICAL]: { default: "stretch" },
});

const height = theme.variants("mode", "variant", {
  [DividerVariant.HORIZONTAL]: { default: "undefined" },
  [DividerVariant.VERTICAL]: { default: "auto" },
});

const width = theme.variants("mode", "variant", {
  [DividerVariant.HORIZONTAL]: { default: "100%" },
  [DividerVariant.VERTICAL]: { default: "undefined" },
});

export const Wrapper = styled.hr<DividerProps>`
  border-color: ${palette.BORDER};
  border-style: solid;
  border-width: ${borderWidth};
  align-self: ${alignSelf};
  height: ${height};
  width: ${width};
  margin-block: unset;
  margin-inline: unset;
`;
