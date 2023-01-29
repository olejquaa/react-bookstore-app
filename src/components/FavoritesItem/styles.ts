import styled from "styled-components";
import { Color, mediaQuery, space, typography } from "ui";

export const StyledBookItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid ${Color.PRYMARY};
  width: 100%;
`;

export const ItemBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${space.desktop.sm};
  background-color: ${Color.ORANGE};
  border-radius: 5px;
  @media (max-width: 1120px) {
    margin: 0 auto;
  }
`;

export const Cost = styled.div`
  padding-top: 40px;
  background: transparent;
  color: black;
  ${typography.h3}
`;
export const Link = styled.div``;

export const Description = styled.div`
  ${typography.s1}
`;
export const Title = styled.h1`
  width: 100%;
  ${typography.h2}
  ${mediaQuery.sm} {
    ${typography.h3}
  }

  ${mediaQuery.xs} {
    ${typography.s1}
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const RateWithBuy = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 50px;
  width: 100%;
  background-color: ${Color.PRYMARY};

  margin-top: ${space.desktop.lg};
  padding: 0;

  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;

export const SubTitle = styled.div``;

export const ButtonDeleteBook = styled.button`
  display: block;
  font-size: 24px;
  padding: 0;
  background: transparent;
  color: ${Color.PRYMARY};
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    border: none;
    background: none;
  }
`;

export const Images = styled.img`
  background: transparent;
`;

export const StyledDescription = styled.p`
  padding: 20px;
  ${typography.bodyPrimary}
`;

export const StyledLanguage = styled.p`
  ${typography.s1}
  color: ${Color.PRYMARY};
`;

export const StyledSubtitle = styled.p`
  padding: 20px;
  ${typography.s1}
  color: ${Color.PRYMARY};
`;

export const StyledAuthor = styled.p`
  ${typography.s1}
  color: ${Color.PRYMARY};
`;

export const StyledYear = styled.p`
  ${typography.s1}
  color: ${Color.PRYMARY};
`;
