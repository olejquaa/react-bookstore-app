import { SignUp } from "components";
import { useNavigateAfterAuth } from "hooks/useNavigateAfterAuth";
import { ROUTE } from "router";
import { StyledSignUpPage } from "./styles";

export const SignUpPage = () => {
  useNavigateAfterAuth(ROUTE.HOME);

  return (
    <StyledSignUpPage>
      <SignUp />
    </StyledSignUpPage>
  );
};
