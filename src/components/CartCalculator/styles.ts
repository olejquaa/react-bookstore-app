import { motion } from "framer-motion";
import { hydrate } from "react-dom";
import styled from "styled-components";
import { typography } from "ui";

export const CalculatorContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 270px;
  justify-self: flex-end;
`;

export const Total = styled(motion.div)`
  ${typography.h1};
`;

export const Text = styled.p`
  ${typography.bodyPrimary}
`;
