import styled from "styled-components";
import { MEDIA_MOBILE } from "../../styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 664px;

  @media ${MEDIA_MOBILE} {
    width: 100%;
  }
`;


export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
`;
