import styled from "styled-components";
import { mediaQuery, space, typography } from "ui";

const StyledTitle = styled.div`
  ${typography.h1}
  margin-bottom: ${space.desktop.xxlg};

  ${mediaQuery.sm} {
    ${typography.h2}
    margin-bottom: ${space.mobile.xxlg};
  }
`;

export { StyledTitle };
