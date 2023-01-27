import { LogOut } from "components";
import { accountSelector, useAppSelector } from "store";

import { BoldSubtitle, Container, Description, StyledAccount, SubTitle, Title } from "./styles";

export const Account = () => {
  const { email, id } = useAppSelector(accountSelector);

  return (
    <StyledAccount>
      <Container>
        <Title>Welcome to the account page</Title>
        <Description>
          <SubTitle>
            Your email upon registration:
            <BoldSubtitle>{email}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Unique number assigned to you:
            <BoldSubtitle>{id}</BoldSubtitle>
          </SubTitle>
        </Description>
        <LogOut />
      </Container>
    </StyledAccount>
  );
};
