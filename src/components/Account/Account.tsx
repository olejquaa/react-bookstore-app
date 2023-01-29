import { CustomTitle, LogOut } from "components";
import { ThemeToggler } from "components";
import { accountSelector, useAppDispatch, useAppSelector } from "store";
import { subscribe } from "store/slices/accountSlice";

import { BoldSubtitle, Button, Container, Description, StyledAccount, SubTitle } from "./styles";

export const Account = () => {
  const dispatch = useAppDispatch();
  const { email, name, subscribtion } = useAppSelector(accountSelector);

  const handleClick = () => {
    dispatch(subscribe());
  };

  return (
    <StyledAccount
      initial={{ y: 1000 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <CustomTitle title={"Welcome to the account page"} />

        <Description>
          <SubTitle>
            Change theme: <ThemeToggler />
          </SubTitle>
          <SubTitle>
            Registered email:
            <BoldSubtitle>{email}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Name:
            <BoldSubtitle>{name}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Subscription:
            <BoldSubtitle>{subscribtion ? "Active" : "Not active"}</BoldSubtitle>
            {subscribtion ? (
              <Button onClick={handleClick}>Stop subscribtion</Button>
            ) : (
              <Button onClick={handleClick}>Subscribe</Button>
            )}
          </SubTitle>
        </Description>
        <LogOut />
      </Container>
    </StyledAccount>
  );
};
