import { FormContainer, SignInForm, StyledButton, StyledInput, StyledLabel } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { Color } from "ui";
import { useState } from "react";
import { Modal } from "antd";
import { useAppDispatch } from "store";
import { resetUserPassword } from "store/slices/accountSlice";

type Inputs = {
  email: string;
};

export const ResetPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ email }) => {
    dispatch(resetUserPassword({ email }));
    showModal();
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTE.HOME + ROUTE.SIGN_IN);
  };

  return (
    <SignInForm onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <StyledLabel>Enter e-mail to reset your password</StyledLabel>
        <StyledLabel>E-mail</StyledLabel>
        <StyledInput {...register("email", { required: true })} />
        {errors.email && <StyledLabel color={Color.RED}>This field is required</StyledLabel>}
        <Modal title="Reset form" open={isModalOpen} onOk={handleClick} onCancel={handleCancel}>
          <StyledLabel>Check your email! We sent you temporary password. </StyledLabel>
        </Modal>
        <StyledButton type="submit" onClick={showModal}>
          Reset
        </StyledButton>
      </FormContainer>
    </SignInForm>
  );
};
