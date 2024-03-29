import {
  ActiveTab,
  FormContainer,
  SignUpForm,
  StyledButton,
  StyledInput,
  StyledLabel,
  Tab,
  Tabs,
} from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Color } from "ui";
import { signUpUser, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { setUser } from "store/slices/accountSlice";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const handleSignUp: SubmitHandler<Inputs> = ({ email, password, name }) => {
    dispatch(signUpUser({ email, password, name }));
    dispatch(setUser({ email, password, name }));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTE.HOME + ROUTE.SIGN_IN);
  };

  return (
    <SignUpForm onSubmit={handleSubmit(handleSignUp)}>
      <Tabs>
        <Tab onClick={handleClick}>Sign in</Tab>
        <ActiveTab>Sign Up</ActiveTab>
      </Tabs>
      <FormContainer>
        <StyledLabel>Name </StyledLabel>
        <StyledInput {...register("name")} />

        <StyledLabel>Email </StyledLabel>
        <StyledInput {...register("email")} />

        <StyledLabel>Password</StyledLabel>
        <StyledInput
          type="password"
          {...register("password", { required: "min 6 symbols", minLength: 6 })}
        />
        {errors.password && <p style={{ color: `${Color.RED}` }}>{errors.password.message}</p>}

        <StyledLabel>Confirm Password</StyledLabel>
        <StyledInput
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm password!",
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
              },
            },
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: `${Color.RED}` }}>{errors.confirmPassword.message}</p>
        )}

        <StyledButton type="submit">Sign UP</StyledButton>
      </FormContainer>
    </SignUpForm>
  );
};
