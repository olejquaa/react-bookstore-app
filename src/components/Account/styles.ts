import styled from "styled-components";
import { Color, typography } from "ui";

export const StyledAccount = styled.div`
  margin: 0 auto;
  max-width: 500px;
  margin-top: 20px;
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
`;

export const Title = styled.h2`
  ${typography.h2}
  padding-top: 20px;
  background: transparent;
`;
export const Description = styled.div`
  width: 100%;
`;

export const SubTitle = styled.div`
  ${typography.h2}
  padding: 10px 5px;
`;

export const BoldSubtitle = styled.p`
  ${typography.s1}
`;

export const Button = styled.button`
  height: 50px;
  min-width: 200px;
  background-color: ${Color.PRYMARY};

  padding: 0;
  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;
