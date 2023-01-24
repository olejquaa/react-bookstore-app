import styled from "styled-components";
import { space, mediaQuery } from "ui";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 104px;
  margin-bottom: ${space.desktop.xxxlg};

  ${mediaQuery.sm} {
    margin-bottom: ${space.mobile.lg};
  }
  ${mediaQuery.xs} {
    margin-bottom: ${space.mobile.lg};
  }
`;

export { StyledHeader };
