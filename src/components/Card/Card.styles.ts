import styled from "styled-components";
import { MEDIA_MOBILE, palette, shadow } from "../../styled";
import { CardCSS } from "./Card.types";

export const Wrapper = styled.div<CardCSS>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px;
  gap: 16px;
  background: ${palette.WHITE};
  box-shadow: ${shadow.NORMAL};
  border-radius: 8px;

  &:hover {
    cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  }

  @media ${MEDIA_MOBILE} {
    box-shadow: unset;
    padding: 0;
    width: 100%;
  }
`;
