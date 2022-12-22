import styled from "styled-components";
import { Color } from "../../ui";
import { button } from "../../ui/buttons";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
