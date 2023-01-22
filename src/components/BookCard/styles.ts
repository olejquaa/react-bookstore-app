import { Link } from "react-router-dom";
import styled from "styled-components";
import { space, Color, typography, mediaQuery } from "ui";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;

  width: 347px;

  margin-bottom: ${space.desktop.md};

  ${mediaQuery.md} {
    margin-bottom: ${space.tablet.md};
  }

  ${mediaQuery.sm} {
    width: 300px;
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
  height: 300px;
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

export const Title = styled.h3`
  flex-grow: 1;
  justify-items: space-between;
  min-height: 64px;
  margin-bottom: ${space.desktop.xxs};
  ${typography.h3};
  ${Color.PRYMARY};
  text-transform: uppercase;
`;

export const Cost = styled.h2`
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
