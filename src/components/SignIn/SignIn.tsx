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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth } from "store/slices/accountSlice";
import { Authorization } from "components/Authorization/Authorization";
import { useAppSelector } from "store/hooks/hooks";

type Inputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAppSelector((state: any) => state.account);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(toggleAuth());
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
