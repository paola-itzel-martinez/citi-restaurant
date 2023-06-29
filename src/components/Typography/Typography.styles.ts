import styled from 'styled-components';
import theme from 'styled-theming';
import { MEDIA_MOBILE, styledCSSMarginRules } from '../../styled';
import { TypographyFamily, TypographyVariant } from '../../types';
import { TypographyCSS } from './Typography.types';

const fontSizeDesktop = theme.variants('mode', 'variant', {
  [TypographyVariant.BUTTON]: { default: '16px' },
  [TypographyVariant.BUTTON_MENU]: { default: '22px' },
  [TypographyVariant.NORMAL]: { default: '16px' },
  [TypographyVariant.SMALL]: { default: '14px' },
  [TypographyVariant.TITLE]: { default: '24px' },
});

const fontSizeMobile = theme.variants('mode', 'variant', {
  [TypographyVariant.BUTTON]: { default: '14px' },
  [TypographyVariant.BUTTON_MENU]: { default: '18px' },
  [TypographyVariant.NORMAL]: { default: '20px' },
  [TypographyVariant.SMALL]: { default: '14px' },
  [TypographyVariant.TITLE]: { default: '20px' },
});

const fontWeight = theme.variants('mode', 'variant', {
  [TypographyVariant.BUTTON]: { default: '400' },
  [TypographyVariant.BUTTON_MENU]: { default: '400' },
  [TypographyVariant.NORMAL]: { default: '400' },
  [TypographyVariant.SMALL]: { default: '400' },
  [TypographyVariant.TITLE]: { default: '700' },
});

export const Wrapper = styled.p<TypographyCSS>`
  color: ${({ color }) => color};
  font-family: ${TypographyFamily.GENERAL};
  font-weight: ${fontWeight};
  letter-spacing: normal;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : undefined)};
  font-size: ${fontSizeDesktop};
  text-overflow: ${({ hasEllipsis }) => hasEllipsis && 'ellipsis'};
  overflow: ${({ hasEllipsis }) => hasEllipsis && 'hidden'};
  white-space: ${({ hasEllipsis }) => hasEllipsis && 'nowrap'};
  padding: 0;
  margin: 0;
  min-width: 20px;

  ${(margin) => styledCSSMarginRules(margin)};

  @media ${MEDIA_MOBILE} {
    font-size: ${fontSizeMobile};
  }
`;
