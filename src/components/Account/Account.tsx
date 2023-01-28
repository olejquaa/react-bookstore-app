import { LogOut } from "components";
import { accountSelector, useAppDispatch, useAppSelector } from "store";
import { subscribe } from "store/slices/accountSlice";

import { BoldSubtitle, Container, Description, StyledAccount, SubTitle, Title } from "./styles";

export const Account = () => {
  const dispatch = useAppDispatch();
  const { email, id, name, subscribtion } = useAppSelector(accountSelector);

  const handleClick = () => {
    dispatch(subscribe());
  };

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
            Name
            <BoldSubtitle>{name}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Unique number assigned to you:
            <BoldSubtitle>{id}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Subscription
            <BoldSubtitle>
              {subscribtion ? (
                <button onClick={handleClick}>"Active" Stop subscribtion</button>
              ) : (
                <button onClick={handleClick}>Subscribe</button>
              )}
            </BoldSubtitle>
          </SubTitle>
        </Description>
        <LogOut />
      </Container>
    </StyledAccount>
  );
};
