import styled from "styled-components";
import { Color, mediaQuery } from "ui";

export const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  border-radius: 10px;
  z-index: 999;
  ${mediaQuery.xxl} {
    grid-template-columns: auto auto auto;
  }
  ${mediaQuery.md} {
    grid-template-columns: auto auto;
  }
  ${mediaQuery.sm} {
    grid-template-columns: auto;
    gap: 10px;
  }
`;

export const ErrorText = styled.p`
  color: ${Color.PRYMARY};
`;
