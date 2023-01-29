import styled from "styled-components";
import { Color, mediaQuery, typography } from "ui";

export const StyledSubscribe = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  padding: 30px;
  margin-top: 30px;

  background-color: ${Color.PURPLE};
`;

export const Title = styled.h1`
  ${typography.h3}
`;

export const Subtitle = styled.p`
  ${typography.bodyPrimary}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  ${mediaQuery.sm} {
    flex-direction: column;
  }
  ${mediaQuery.xs} {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  ${typography.bodyPrimary}

  &::placeholder {
    border: none;
    ${typography.bodyPrimary}
    opacity: 30%;
    padding-left: 10px;
  }
  &:focus {
    &::placeholder {
      padding-left: 10px;
    }
    outline: none;
  }
`;

export const Button = styled.button`
  height: 35px;
  width: 30%;
  min-width: 90px;
  background-color: ${Color.PRYMARY};

  padding: 0;
  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;
