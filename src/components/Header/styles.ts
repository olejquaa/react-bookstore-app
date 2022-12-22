import styled from "styled-components";
import { space, mediaQuery } from "../../ui";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 104px;
  margin-bottom: ${space.desktop.xxxlg};

  ${mediaQuery.xs} {
    margin-bottom: ${space.mobile.xxxlg};
  }
`;

export { StyledHeader };
