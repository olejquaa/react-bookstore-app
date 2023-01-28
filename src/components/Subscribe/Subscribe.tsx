import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { accountSelector, useAppDispatch, useAppSelector } from "store";
import { subscribe } from "store/slices/accountSlice";
import { Color } from "ui";
import { Button, Input, InputContainer, StyledSubscribe, Subtitle, Title } from "./styles";

type Inputs = {
  email: string;
};

export const Subscribe = () => {
  const dispatch = useAppDispatch();
  const { subscribtion, isAuth } = useAppSelector(accountSelector);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    {
      isAuth ? dispatch(subscribe()) : navigate(ROUTE.SIGN_IN);
    }
  };

  return (
    <>
      {!subscribtion ? (
        <StyledSubscribe onSubmit={handleSubmit(onSubmit)}>
          <Title> Subscribe to Newsletter </Title>
          <Subtitle>
            Be the first to know about new IT books, upcoming releases, exclusive offers and more.
          </Subtitle>
          <InputContainer>
            <Input placeholder="Your Email" {...register("email", { required: true })} />
            <Button type="submit">Subscribe</Button>
          </InputContainer>
          {errors.email && <Subtitle color={Color.RED}>This field is required</Subtitle>}
        </StyledSubscribe>
      ) : (
        <StyledSubscribe>
          <Title>You are subscribed to the Newsletter</Title>
        </StyledSubscribe>
      )}
    </>
  );
};
