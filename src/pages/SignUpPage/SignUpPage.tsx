import { SignUp } from "components";
import { useNavigateAfterAuth } from "hooks";
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
