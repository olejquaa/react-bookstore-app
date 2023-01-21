import { SignIn } from "components";
import { useNavigateAfterAuth } from "hooks/useNavigateAfterAuth";
import { ROUTE } from "router";
import { StyledSignInPage } from "./styles";

export const SignInPage = () => {
  useNavigateAfterAuth(ROUTE.HOME);

  return (
    <StyledSignInPage>
      <SignIn />
    </StyledSignInPage>
  );
};
