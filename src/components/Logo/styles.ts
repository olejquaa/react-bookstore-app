import styled from "styled-components";
import { mediaQuery } from "ui";
import logoImage from "assets/img/logo.svg";

const StyledLogo = styled.div`
  min-width: 137.51px;
  min-height: 28.64px;

  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logoImage});

  ${mediaQuery.xs} {
    min-width: 122px;
    min-height: 25px;
  }
`;

export { StyledLogo };
