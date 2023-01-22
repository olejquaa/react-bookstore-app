import { Link } from "react-router-dom";
import styled from "styled-components";
import { space, mediaQuery, Color, typography } from "ui";

const StyledBookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 352px;

  ${mediaQuery.md} {
    width: 328px;
  }

  ${mediaQuery.xs} {
    width: 272px;
  }

  border: 1px solid black;
`;

export { StyledBookCard };

export const StyledBookItem = styled.li`
  width: 300px;
  margin: 0 auto;
  margin-bottom: ${space.desktop.lg};
  list-style-type: none;
`;
export const ItemBackground = styled.div`
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
  margin-bottom: ${space.desktop.xxs};
  ${typography.h3};
  ${Color.PRYMARY};
  text-transform: uppercase;
`;
export const SubTitle = styled.p`
  flex-grow: 1;
  margin-bottom: ${space.desktop.lg};
  ${typography.bodyPrimary}
  ${Color.SECONDARY}
`;
export const Cost = styled.title`
  background: transparent;
  color: black;
  margin-top: ${space.desktop.md};
  text-transform: capitalize;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
