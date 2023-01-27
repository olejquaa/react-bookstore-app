import styled from "styled-components";
import { Color, mediaQuery, typography, space } from "ui";

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 544px;
  border: 1px solid ${Color.GRAY};

  ${mediaQuery.md} {
    width: 420px;
  }

  ${mediaQuery.sm} {
    width: 280px;
  }

  ${mediaQuery.xs} {
    width: 280px;
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  border-bottom: 1px solid ${Color.GRAY};

  ${typography.s1}
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  width: 50%;

  color: ${Color.SECONDARY};

  text-decoration: none;

  cursor: pointer;
`;

const ActiveTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 50%;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 16px;

  border-bottom: 2px solid ${Color.PRYMARY};
  cursor: pointer;
`;

const StyledLabel = styled.label`
  padding-bottom: 5px;
  padding-top: 5px;
  margin-top: ${space.desktop.xxs};
  ${typography.s1};
`;

const StyledInput = styled.input`
  padding: 11px;
  border: 1px solid ${Color.GRAY};

  ${typography.bodySecondary}
`;

const StyledButton = styled.button`
  height: 56px;
  width: 100%;
  background-color: ${Color.PRYMARY};

  margin-top: ${space.desktop.lg};
  margin-bottom: ${space.desktop.lg};

  padding: 0;

  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: none;

  margin-top: ${space.desktop.sm};
  padding-left: 16px;
  padding-right: 16px;
`;

export { SignInForm, Tabs, Tab, ActiveTab, StyledLabel, StyledInput, StyledButton, FormContainer };
