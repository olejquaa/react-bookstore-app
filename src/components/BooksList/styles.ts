import styled from "styled-components";
import { Color, mediaQuery } from "ui";

export const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  gap: 37px;

  min-width: 100%;
  border-radius: 10px;

  z-index: 1;
  ${mediaQuery.xxl} {
    grid-template-columns: auto auto auto;
    gap: 1rem;

    max-width: 1120px;
  }

  ${mediaQuery.xl} {
    grid-template-columns: auto auto auto;
    gap: 1rem;
    max-width: 1120px;
  }

  ${mediaQuery.lg} {
    grid-template-columns: auto auto;
    gap: 1rem;
    max-width: 760px;
  }
  ${mediaQuery.md} {
    grid-template-columns: auto auto;
    gap: 1rem;
    max-width: 760px;
  }

  ${mediaQuery.sm} {
    grid-template-columns: auto;
    gap: 1rem;
    max-width: 275px;
  }
  ${mediaQuery.xs} {
    grid-template-columns: auto;
    gap: 1rem;
    max-width: 275px;
  }
`;

export const ErrorText = styled.p`
  color: ${Color.RED};
`;
