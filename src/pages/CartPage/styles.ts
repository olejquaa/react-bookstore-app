import styled from "styled-components";

import { Color, mediaQuery, space, typography } from "ui";

export const StyledCartPage = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  ${typography.h1}
`;
export const Button = styled.button`
  height: 56px;
  width: 200px;
  background-color: ${Color.PRYMARY};

  margin-top: ${space.desktop.lg};
  margin-bottom: ${space.desktop.lg};

  padding: 0;

  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  gap: 20px;
  ${mediaQuery.sm} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${mediaQuery.xs} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${mediaQuery.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${mediaQuery.lg} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
