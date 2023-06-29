import styled from 'styled-components';
import { MEDIA_MOBILE, palette } from './styled';

export const Page = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${palette.WHITE};
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 42px;
  overflow-x: auto;

  @media ${MEDIA_MOBILE} {
    padding: 16px;
  }
`;
