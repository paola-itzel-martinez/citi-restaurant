import styled from "styled-components";
import { palette } from "../../styled";

export const Dot = styled.div`
  width: 16px;
  height: 16px;
  margin: 3px 6px;
  border-radius: 50%;
  background-color: ${palette.PRIMARY};
  opacity: 1;
  animation: loop 0.6s infinite alternate;

  @keyframes loop {
    to {
      opacity: 0.1;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;

  ${Dot}:nth-child(2) {
    animation-delay: 0.2s;
  }

  ${Dot}:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
