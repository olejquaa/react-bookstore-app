import {
  ActiveTab,
  ForgotLink,
  FormContainer,
  SignInForm,
  StyledButton,
  StyledInput,
  StyledLabel,
  Tab,
  Tabs,
} from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, signInUser } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

type Inputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    dispatch(signInUser({ email, password }));
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTE.HOME + ROUTE.SIGN_UP);
  };

  const handleForgotPass = () => {
    navigate(ROUTE.HOME + ROUTE.RESET_PASSWORD);
  };

  return (
    <SignInForm onSubmit={handleSubmit(onSubmit)}>
      <Tabs>
        <ActiveTab>Sign in</ActiveTab>
        <Tab onClick={handleClick}>Sign Up</Tab>
      </Tabs>
      <FormContainer>
        <StyledLabel>E-mail</StyledLabel>
        <StyledInput {...register("email")} />
        <StyledLabel>Password</StyledLabel>
        <StyledInput type={"password"} {...register("password", { required: true })} />
        {errors.password && <StyledLabel>This field is required</StyledLabel>}
        <ForgotLink onClick={handleForgotPass}>Forgot your password?</ForgotLink>
        <StyledButton type="submit">Sign IN</StyledButton>
      </FormContainer>
    </SignInForm>
  );
};
