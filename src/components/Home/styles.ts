import styled from "styled-components";
import { typography } from "../../ui";

const HomePageContainer = styled.div`
  display: grid;
`;

const Title = styled.h1`
  ${typography.h1}
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

const BodyPrimary = styled.p`
  ${typography.bodyPrimary}
`;

const BodySecondary = styled.p`
  ${typography.bodySecondary}
`;

export { Title, Subline, Subtitle, H3, BodyPrimary, BodySecondary, HomePageContainer };
