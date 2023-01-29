import styled from "styled-components";
import { Color } from "ui";
import { motion } from "framer-motion";

interface IButtonTheme {
  title: string;
}

export const StyledToggler = styled.div`
  display: flex;
  align-self: center;

  @media (max-width: 800px) {
    justify-content: flex-start;
    background: transparent;
    margin-right: 160px;
  }
`;

export const ButtonTheme = styled(motion.button)<IButtonTheme>`
  background: black;
  color: white;
  border-color: white;
  padding: 10px 20px;
  margin-right: 20px;
  margin-left: 10px;
  background: transparent;
  border: 1px solid ${({ title }) => (title ? `${Color.PRYMARY} ` : "white")};
  border-radius: 10px;
  color: ${({ title }) => title && `${Color.PRYMARY}`};
`;
