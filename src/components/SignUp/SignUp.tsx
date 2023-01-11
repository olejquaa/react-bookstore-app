import { SignUpForm } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ email, confirmEmail, password }) => {
    const auth = getAuth();
    console.log("test@test.com");
    console.log("123456");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
      SignInForm
      {/* register your input into the hook by invoking the "register" function */}
      Name
      <input {...register("name")} />
      email
      <input {...register("email")} />
      confEm
      <input {...register("confirmEmail")} />
      {/* include validation with required or other standard HTML validation rules */}
      pass
      <input {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </SignUpForm>
  );
};
