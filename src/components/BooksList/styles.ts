import styled from "styled-components";
import { Color, mediaQuery } from "ui";

export const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  border-radius: 10px;
  gap: 37px;
  z-index: 999;
  ${mediaQuery.lg} {
    grid-template-columns: auto auto;
    gap: 40px;
  }
  ${mediaQuery.md} {
    grid-template-columns: auto auto;
    gap: 40px;
  }

  ${mediaQuery.xs} {
    grid-template-columns: auto auto;
    gap: 10px;
  }
  ${mediaQuery.sm} {
    grid-template-columns: auto;
    gap: 10px;
  }
  ${mediaQuery.xs} {
    grid-template-columns: auto;
    gap: 10px;
  }
`;

export const ErrorText = styled.p`
  color: ${Color.PRYMARY};
`;
