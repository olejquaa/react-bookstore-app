import styled from "styled-components";
import { Color, space } from "ui";
import { button } from "ui/buttons";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SignUpButton = styled.button`
  padding: 5px 15px;
  ${button.default}

  :hover {
    ${button.hover}
  }

  :active {
    ${button.active}
  }
`;

export const SignInButton = styled.button`
  padding: 5px 15px;
  ${button.default};
  background: none;
  color: ${Color.SECONDARY};

  :hover {
    color: ${Color.PRYMARY};
  }

  :active {
    color: ${Color.RED};
  }
`;
