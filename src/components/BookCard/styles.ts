import styled from "styled-components";
import { space, mediaQuery, Color } from "ui";

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
