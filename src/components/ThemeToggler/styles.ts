import styled from "styled-components";
import { Color, typography } from "ui";
import { motion } from "framer-motion";

interface IButtonTheme {
  title: string;
}

export const StyledToggler = styled.div`
  display: flex;
  align-self: center;
`;

export const ButtonTheme = styled(motion.button)<IButtonTheme>`
  height: 35px;
  width: 30%;
  min-width: 90px;

  padding: 0;
  border: none;

  ${typography.s1}

  background: transparent;
  color: ${({ title }) => title && `${Color.WHITE}`};

  background-color: ${Color.PRYMARY};
`;
