import { SignInForm } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type Inputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
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
    <SignInForm onSubmit={handleSubmit(onSubmit)}>
      SignInForm
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("email")} />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </SignInForm>
  );
};
