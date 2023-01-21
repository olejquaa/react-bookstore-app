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
import { Authorization } from "components/Authorization/Authorization";
import { signUpUser } from "store/slices/accountSlice";
import { useAppDispatch } from "store";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface IUser {
  email: string;
  id: string;
  token: string;
}

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const handleSignUp: SubmitHandler<Inputs> = ({ email, password }) => {
    dispatch(signUpUser({ email, password }));
  };

  return (
    <SignUpForm onSubmit={handleSubmit(handleSignUp)}>
      <Authorization />
      <Tabs>
        <Tab>Sign in</Tab>
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
          {...register("password", { required: "min 10 symbols", minLength: 10 })}
        />
        {errors.password && <p style={{ color: `${Color.RED}` }}>{errors.password.message}</p>}

        <StyledLabel>Confirm Password</StyledLabel>
        <StyledInput
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
