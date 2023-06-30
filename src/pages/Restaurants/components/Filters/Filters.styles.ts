import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { MEDIA_MOBILE } from "../../../../styled";

export const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  width: 100%;
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 16px;
  scroll-snap-align: start;

  @media ${MEDIA_MOBILE} {
    min-width: 100%;
  }
`;

export const FilterButton = styled(Button)`
  @media ${MEDIA_MOBILE} {
    &.filter-button {
      width: calc(50% - 8px);
    }
  }
`;