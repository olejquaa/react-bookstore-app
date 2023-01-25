import { Button, Input, InputContainer, StyledSubscribe, Subtitle, Title } from "./styles";

export const Subscribe = () => {
  return (
    <StyledSubscribe>
      <Title> Subscribe to Newsletter </Title>
      <Subtitle>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </Subtitle>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button type="submit">Subscribe</Button>
      </InputContainer>
    </StyledSubscribe>
  );
};
