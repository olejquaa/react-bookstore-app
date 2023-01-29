import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, mediaQuery, space, typography } from "ui";

export const BookDetailsPageContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  gap: 1rem;

  ${mediaQuery.md} {
    grid-template-columns: auto;
  }

  ${mediaQuery.sm} {
    grid-template-columns: auto;
  }
  ${mediaQuery.xs} {
    grid-template-columns: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${space.desktop.md};

  ${mediaQuery.md} {
    margin-bottom: ${space.tablet.md};
  }

  ${mediaQuery.sm} {
    margin-bottom: ${space.mobile.lg};
  }
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: ${space.desktop.xxs};

  background-color: ${Color.ORANGE};
`;

export const CardBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: ${space.tablet.lg};
  background-color: ${Color.ORANGE};
  border-radius: 5px;
`;

export const Image = styled.img`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
  width: 215px;
  object-fit: contain;
  background: transparent;
`;

export const Title = styled.div`
  ${typography.s1}
`;

export const StyledText = styled.div`
  display: flex;
  justify-content: space-between;
  ${typography.bodyPrimary}
`;

export const DescriptionContainer = styled.div`
  min-height: 200px;
  ${typography.bodySecondary}
`;

export const Cost = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  ${typography.h3}
  text-align: start;
  letter-spacing: 0.08rem;

  margin-bottom: ${space.desktop.lg};
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  ::after {
    padding: 5px;
    content: ">";
  }
`;

export const StyledButton = styled.button`
  height: 50px;
  width: 100%;
  background-color: ${Color.PRYMARY};

  margin-top: ${space.desktop.lg};
  padding: 0;

  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;
