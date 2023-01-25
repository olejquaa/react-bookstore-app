// <StyledSubscribe>
//   <Title> Subscribe to Newsletter </Title>
//   <Subtitle>
//     Be the first to know about new IT books, upcoming releases, exclusive offers and more.
//   </Subtitle>
//   <InputContainer>
//     <Input placeholder="Your Email" />
//     <Button type="submit">Subscribe</Button>
//   </InputContainer>
// </StyledSubscribe>;

import styled from "styled-components";
import { Color, space, typography } from "ui";

export const StyledSubscribe = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  padding: 30px;

  background-color: ${Color.PURPLE};
`;

export const Title = styled.h1`
  ${typography.h3}
`;

export const Subtitle = styled.p`
  ${typography.bodyPrimary}
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 15px;
  border: none;
  ${typography.bodyPrimary}

  &::placeholder {
    border: none;
    ${typography.bodyPrimary}

    opacity: 30%;
  }
  &:focus {
    outline: none;
    padding-left: 15px;
  }
`;

export const Button = styled.button`
  height: 35px;
  width: 30%;
  background-color: ${Color.PRYMARY};

  padding: 0;
  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;
