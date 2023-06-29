import styled from 'styled-components';
import { styledCSSMarginRules, styledCSSSpacingRules } from '../../styled';
import { ImageCSS } from './Image.types';

export const Wrapper = styled.img<ImageCSS>`
  ${(props) => styledCSSSpacingRules(props)};
  ${(props) => styledCSSMarginRules(props)};
`;
