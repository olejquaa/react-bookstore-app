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
import { useAppDispatch, signInUser } from "store";

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

  return (
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
  );
};
