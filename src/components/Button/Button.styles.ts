import styled from "styled-components";
import theme from "styled-theming";
import { MEDIA_MOBILE, palette, shadow } from "../../styled";
import { ButtonVariant, TypographyFamily } from "../../types";
import { ButtonCSS } from "./Button.types";

const { LIGHT_GRAY, NORMAL_TEXT, PRIMARY, PRIMARY_LIGHT, WHITE } = palette;

const background = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: {
    default: `linear-gradient(115deg, ${PRIMARY}, ${PRIMARY_LIGHT});`,
  },
  [ButtonVariant.MENU]: { default: LIGHT_GRAY },
});

const backgroundHover = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: { default: PRIMARY },
  [ButtonVariant.MENU]: { default: WHITE },
});

const border = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: { default: "unset" },
  [ButtonVariant.MENU]: { default: `1px solid ${LIGHT_GRAY}` },
});

const borderHover = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: { default: "unset" },
  [ButtonVariant.MENU]: { default: `1px solid ${PRIMARY}` },
});

const color = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: { default: WHITE },
  [ButtonVariant.MENU]: { default: NORMAL_TEXT },
});

const fontSize = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: { default: "16px" },
  [ButtonVariant.MENU]: { default: "22px" },
});

const textTransform = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: { default: "uppercase" },
  [ButtonVariant.MENU]: { default: "capitalize" },
});

const padding = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: { default: "8px 32px" },
  [ButtonVariant.MENU]: { default: "12px 32px" },
});

const wrapperShadow = theme.variants("mode", "variant", {
  [ButtonVariant.CARD]: { default: "unset" },
  [ButtonVariant.MENU]: { default: shadow.NORMAL },
});

export const Wrapper = styled.button<ButtonCSS>`
  background: ${background};
  border: ${border};
  border-radius: 8px;
  color: ${color};
  font-family: ${TypographyFamily.GENERAL};
  font-size: ${fontSize};
  font-weight: 400;
  text-transform: ${textTransform};
  box-shadow: ${wrapperShadow};
  padding: ${padding};
  white-space: nowrap;

  &.selected,
  &:hover {
    background: ${backgroundHover};
    border: ${borderHover};
    cursor: pointer;
  }

  @media ${MEDIA_MOBILE} {
    white-space: unset;
  }
`;
