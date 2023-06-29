import { CSSMarginRules, TypographyVariant } from '../../types';

export type GetAsType = (params: {
  variant: TypographyVariant;
}) => keyof JSX.IntrinsicElements;

export interface TypographyCSS extends CSSMarginRules {
  color?: string;
  hasEllipsis?: boolean;
  textAlign?: 'center' | 'start';
  variant?: TypographyVariant;
}

export interface TypographyProps extends TypographyCSS {
  children: any;
}
