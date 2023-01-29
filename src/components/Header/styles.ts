import styled from "styled-components";
import { space, mediaQuery, Color } from "ui";

const StyledHeader = styled.div`
  position: fixed;

  width: 70rem;
  display: flex;

  box-sizing: border-box;

  align-items: center;
  height: 104px;

  background-color: ${Color.WHITE};
  z-index: 7;

  ${mediaQuery.sm} {
    margin-bottom: ${space.mobile.lg};
  }
  ${mediaQuery.xs} {
    margin-bottom: ${space.mobile.lg};
  }

  ${mediaQuery.xxl} {
    max-width: 1120px;
  }
  ${mediaQuery.xl} {
    max-width: 986px;
  }

  ${mediaQuery.lg} {
    max-width: 687px;
  }
  ${mediaQuery.md} {
    max-width: 687px;
  }
  ${mediaQuery.sm} {
    max-width: 271px;
  }

  ${mediaQuery.xs} {
    max-width: 271px;
    padding: 0px 23px;
  }
`;

export { StyledHeader };
