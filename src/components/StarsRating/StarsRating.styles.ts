import styled from 'styled-components';
import { palette } from '../../styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const StarIcon = styled.i`
  display: inline-block;
  color: ${palette.YELLOW};
  overflow: hidden;
  width: 16px;
  text-overflow: clip;
`;
