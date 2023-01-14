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
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Color } from "ui";

type Inputs = {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ name, email, confirmEmail, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
      <Tabs>
        <Tab>Sign in</Tab>
        <ActiveTab>Sign Up</ActiveTab>
      </Tabs>
      <FormContainer>
        <StyledLabel>Name </StyledLabel>
        <StyledInput {...register("name")} />
        {/* ==== */}
        <StyledLabel>Email </StyledLabel>
        <StyledInput {...register("email")} />
        {/* ==== */}
        <StyledLabel>Confirm email</StyledLabel>
        <StyledInput
          {...register("confirmEmail", {
            required: "Please confirm password!",
            validate: {
              matchesPreviousPassword: (value) => {
                const { email } = getValues();
                return email === value || "emails should match!";
              },
            },
          })}
        />
        {errors.confirmEmail && (
          <p style={{ color: `${Color.RED}` }}>{errors.confirmEmail.message}</p>
        )}
        {/* ==== */}
        <StyledLabel>Password</StyledLabel>
        <StyledInput {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        <StyledButton type="submit">Sign UP</StyledButton>
      </FormContainer>
    </SignUpForm>
  );
};
