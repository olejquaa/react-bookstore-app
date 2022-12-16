import styled from "styled-components";
import { typography } from "./ui/typography";
import { space } from "./ui";
import { mediaQuery } from "./ui/media";

const Title = styled.h1`
  ${typography.desktop.h1}
  margin-bottom: ${space.desktop.xxxlg};

  ${mediaQuery.xs} {
    ${typography.mobile.h1}
    margin-bottom: ${space.mobile.sm};
  }
`;

const Subtitle = styled.h2`
  ${typography.desktop.h2}
`;

const H3 = styled.h3`
  ${typography.desktop.h3}
`;

const Subline = styled.h4`
  ${typography.desktop.s1}
`;

const BodyPrimary = styled.h5`
  ${typography.desktop.b1_primary}
`;

const BodySecondary = styled.h6`
  ${typography.desktop.b1_secondary}
`;

export { Title, Subline, Subtitle, H3, BodyPrimary, BodySecondary };
