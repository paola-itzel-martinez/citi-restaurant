import { css } from "styled-components";
import { CSSMarginRules, CSSPaddingRules, CSSSpacingRules } from "../../types";
import { FormatRules } from "./cssRules.types";

export const formatRules: FormatRules = (rule) => {
  if (typeof rule === "number") return `${rule}px`;

  return String(rule);
};

export const styledCSSSpacingRules = (rules: CSSSpacingRules) => {
  return css`
    ${rules?.width && `width: ${formatRules(rules.width)};`}
    ${rules?.minWidth && `min-width: ${formatRules(rules.minWidth)};`}
    ${rules?.maxWidth && `max-width: ${formatRules(rules.maxWidth)};`}
    ${rules?.height && `height: ${formatRules(rules.height)};`}
    ${rules?.minHeight && `min-height: ${formatRules(rules.minHeight)};`}
    ${rules?.maxHeight && `max-height: ${formatRules(rules.maxHeight)};`}
  `;
};

export const styledCSSMarginRules = (rules: CSSMarginRules) => {
  if (rules?.m) {
    return css`
      margin: ${formatRules(rules.m)};
    `;
  }

  return css`
    ${rules?.mx && `margin-inline: ${formatRules(rules.mx)};`};
    ${rules?.mt && `margin-top: ${formatRules(rules.mt)};`};
    ${rules?.mr && `margin-right: ${formatRules(rules.mr)};`};
    ${rules?.mb && `margin-bottom: ${formatRules(rules.mb)};`};
    ${rules?.ml && `margin-left: ${formatRules(rules.ml)};`};
  `;
};

export const styledCSSPaddingRules = (rules: CSSPaddingRules) => {
  if (rules?.p) {
    return css`
      padding: ${formatRules(rules.p)};
    `;
  }

  return css`
    ${rules?.px && `padding-inline: ${formatRules(rules.px)};`};
    ${rules?.pt && `padding-top: ${formatRules(rules.pt)};`};
    ${rules?.pr && `padding-right: ${formatRules(rules.pr)};`};
    ${rules?.pb && `padding-bottom: ${formatRules(rules.pb)};`};
    ${rules?.pl && `padding-left: ${formatRules(rules.pl)};`};
  `;
};
