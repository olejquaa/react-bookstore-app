import styled from "styled-components";
import { Color, typography } from "ui";

export const StyledLogOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const Button = styled.button`
  height: 50px;
  width: 100%;
  min-width: 200px;
  background-color: ${Color.PRYMARY};

  padding: 0;
  border: none;

  ${typography.s1}
  color: ${Color.WHITE};

  margin-top: 50px;
`;
