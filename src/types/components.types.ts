export enum ButtonVariant {
  CARD = 'CARD',
  MENU = 'MENU',
}

export enum DividerVariant {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

export enum Portals {
  MODAL = 'MODAL',
}

export enum TypographyVariant {
  BUTTON = 'BUTTON',
  BUTTON_MENU = 'BUTTON_MENU',
  NORMAL = 'NORMAL',
  SMALL = 'SMALL',
  TITLE = 'TITLE',
}

export enum TypographyFamily {
  GENERAL = "'Roboto',sans-serif",
}

export type CSSRule = number | string;

export type CSSMarginRules = {
  m?: CSSRule;
  mx?: CSSRule;
  my?: CSSRule;
  mt?: CSSRule;
  mr?: CSSRule;
  mb?: CSSRule;
  ml?: CSSRule;
};

export type CSSPaddingRules = {
  p?: CSSRule;
  px?: CSSRule;
  py?: CSSRule;
  pt?: CSSRule;
  pr?: CSSRule;
  pb?: CSSRule;
  pl?: CSSRule;
};

export type CSSSpacingRules = {
  width?: CSSRule;
  minWidth?: CSSRule;
  maxWidth?: CSSRule;
  height?: CSSRule;
  minHeight?: CSSRule;
  maxHeight?: CSSRule;
};
