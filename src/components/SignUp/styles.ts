import styled from "styled-components";
import { mediaQuery } from "ui";

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 480px;
  border: 1px solid black;

  ${mediaQuery.md} {
    width: 420px;
  }

  ${mediaQuery.xs} {
    width: 280px;
  }
`;

export { SignUpForm };
