import { css } from "styled-components";
import { CSSMarginRules, CSSPaddingRules, CSSSpacingRules } from "types";
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
    margin-inline: ${formatRules(rules.mx)};
    margin-top: ${formatRules(rules.mt) || formatRules(rules.my)};
    margin-right: ${formatRules(rules.mr)};
    margin-bottom: ${formatRules(rules?.my) || formatRules(rules.my)};
    margin-left: ${formatRules(rules.ml)};
  `;
};

export const styledCSSPaddingRules = (rules: CSSPaddingRules) => {
  if (rules?.p) {
    return css`
      padding: ${formatRules(rules.p)};
    `;
  }

  return css`
    padding-inline: ${formatRules(rules.px)};
    padding-top: ${formatRules(rules.pt) || formatRules(rules.py)};
    padding-right: ${formatRules(rules.pr)};
    padding-bottom: ${formatRules(rules.pb) || formatRules(rules.pb)};
    padding-left: ${formatRules(rules.pl)};
  `;
};
