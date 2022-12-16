import styled from "styled-components";
import { typography } from "./ui/typography";
import { space } from "./ui";

const Title = styled.h1`
  ${typography.h1}
  margin-bottom: ${space.xxxlg};
`;
const Subtitle = styled.h2`
  ${typography.h2}
`;

const H3 = styled.h3`
  ${typography.h3}
`;

const Subline = styled.h4`
  ${typography.s1}
`;

const BodyPrimary = styled.h5`
  ${typography.b1_primary}
`;

const BodySecondary = styled.h6`
  ${typography.b1_secondary}
`;

export { Title, Subline, Subtitle, H3, BodyPrimary, BodySecondary };
