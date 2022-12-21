import styled from "styled-components";
import { space, mediaQuery, Color } from "../../ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: ${space.desktop.xxxlg};

  ${mediaQuery.xs} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    margin-top: ${space.mobile.xxxlg};

    text-align: center;
  }

  ${mediaQuery.sm} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-top: ${space.mobile.xxxlg};

    text-align: center;
  }
`;
const Copyright = styled.p`
  height: 24px;
  padding-bottom: 35px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${Color.SECONDARY};

  ${mediaQuery.xs} {
    padding-bottom: 24px;
  }

  ${mediaQuery.sm} {
    padding-bottom: 24px;
  }
`;

export { StyledFooter, Copyright };
