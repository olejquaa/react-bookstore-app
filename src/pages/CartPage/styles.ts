import styled from "styled-components";

import { typography } from "ui";

export const StyledCartPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  ${typography.h1}
`;
export const Button = styled.button`
  width: 20%;
  padding: 15px 0;
  margin: 0;
  margin-top: 30px;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 40%;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  width: 100%;
`;
