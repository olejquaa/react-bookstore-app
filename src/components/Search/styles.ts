import styled from "styled-components";
import { Color, typography } from "ui";

export const Input = styled.input`
  padding: 5px;
  width: 100%;
  border-radius: none;
  ${typography.bodyPrimary}
  outline: none;
  border: 0px;

  &::placeholder {
    border: none;
    ${typography.bodySecondary}
    padding: 5px;
    outline: none;
    color: ${Color.PRYMARY_LIGHT};
    opacity: 60%;
  }

  &:focus {
    outline: none;
    padding-left: 5px;
  }
  border-color: none;
`;

export const Button = styled.button`
  align-self: center;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background: transparent;
  border: none;
  color: ${Color.PRYMARY};
  cursor: pointer;
`;
export const StyledSearch = styled.form`
  display: flex;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid ${Color.PRYMARY_LIGHT};
`;

export const SearchImage = styled.img`
  width: 30px;
  z-index: 999;
`;
