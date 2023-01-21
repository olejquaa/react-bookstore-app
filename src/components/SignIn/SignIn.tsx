import {
  ActiveTab,
  FormContainer,
  SignInForm,
  StyledButton,
  StyledInput,
  StyledLabel,
  Tab,
  Tabs,
} from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Authorization } from "components/Authorization/Authorization";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { signInUser } from "store/slices/accountSlice";

type Inputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    dispatch(signInUser({ email, password }));
  };

  return (
    <>
      <Authorization />
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <Tabs>
          <ActiveTab>Sign in</ActiveTab>
          <Tab>Sign Up</Tab>
        </Tabs>
        <FormContainer>
          <StyledLabel>E-mail</StyledLabel>
          <StyledInput {...register("email")} />
          <StyledLabel>Password</StyledLabel>
          <StyledInput {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
          <StyledButton type="submit">Sign IN</StyledButton>
        </FormContainer>
      </SignInForm>
    </>
  );
};
