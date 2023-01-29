import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQuery, typography } from "ui";

export const FavoritesPageContainer = styled(motion.div)`
  display: grid;
  max-width: 1120px;
  width: 100%;
`;

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  gap: 37px;

  min-width: 100%;
  border-radius: 10px;

  z-index: 1;
  ${mediaQuery.xxl} {
    grid-template-columns: auto auto auto;
    gap: 1rem;

    max-width: 1120px;
  }

  ${mediaQuery.xl} {
    grid-template-columns: auto auto auto;
    gap: 1rem;
    max-width: 1120px;
  }

  ${mediaQuery.lg} {
    grid-template-columns: auto auto;
    gap: 1rem;
    max-width: 760px;
  }
  ${mediaQuery.md} {
    grid-template-columns: auto auto;
    gap: 1rem;
    max-width: 760px;
  }

  ${mediaQuery.sm} {
    grid-template-columns: auto;
    gap: 1rem;
    max-width: 275px;
  }
  ${mediaQuery.xs} {
    grid-template-columns: auto;
    gap: 1rem;
    max-width: 275px;
  }
`;

export const StyledTitleFavorites = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.h1};
`;
export const StyledFavorites = styled.div``;
