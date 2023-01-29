import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { space, Color, typography, mediaQuery } from "ui";

export const CardContainer = styled(motion.li)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 310px;
  padding-bottom: ${space.desktop.lg};
  padding: 10px;
  z-index: 1;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  overflow: hidden;

  &:hover {
    -webkit-box-shadow: 0px 20px 40px 8px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 20px 40px 8px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 20px 40px 8px rgba(34, 60, 80, 0.2);
  }

  transition: 0.5s;

  ${mediaQuery.xl} {
    width: 270px;
  }

  ${mediaQuery.lg} {
    width: 270px;
  }

  ${mediaQuery.md} {
    width: 220px;
    margin-bottom: ${space.tablet.md};
  }

  ${mediaQuery.sm} {
    width: 220px;
    margin-bottom: ${space.mobile.lg};
  }
  ${mediaQuery.xs} {
    width: 200px;
    margin-bottom: ${space.mobile.lg};
  }
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  flex-grow: 1;
  height: 90px;
  margin-bottom: ${space.desktop.xxs};
  ${typography.h3};
  ${Color.PRYMARY};
  text-transform: uppercase;
  text-align: end;
`;

export const Subtitle = styled.div`
  display: block;
  height: 90px;
  ${typography.bodySecondary}
`;

export const Cost = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;

  ${typography.h3}
  text-align: end;
  letter-spacing: 0.08rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
