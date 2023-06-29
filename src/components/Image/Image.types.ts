import { HTMLAttributes } from 'react';
import { CSSMarginRules, CSSSpacingRules } from '../../types';

export interface ImageCSS
  extends HTMLAttributes<HTMLImageElement>,
    CSSSpacingRules,
    CSSMarginRules {}

export interface ImageProps extends ImageCSS {
  src: string;
  alt: string;
}
