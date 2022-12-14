import { BodyPrimary, BodySecondary, H3, Subline, Subtitle, Title } from "./styles";
import { GlobalStyle } from "./ui";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Title>Styles</Title>
      <Title>H1 style</Title>
      <Subtitle>H2 style</Subtitle>
      <H3>H3 style</H3>
      <Subline>S1 style</Subline>
      <BodyPrimary>BODY style primary</BodyPrimary>
      <BodySecondary>BODY style secondary</BodySecondary>
    </div>
  );
};
