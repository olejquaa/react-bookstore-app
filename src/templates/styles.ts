import styled from "styled-components";
import { typography } from "../ui/typography";
import { Color, space } from "../ui";
import { mediaQuery } from "../ui/media";
import logo from "../assets/img/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;
  padding: 0px 40px;

  ${mediaQuery.xs} {
    padding: 0px 23px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 104px;
  margin-bottom: ${space.desktop.xxxlg};

  ${mediaQuery.xs} {
    margin-bottom: ${space.mobile.xxxlg};
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
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

const Logo = styled.div`
  min-width: 137.51px;
  min-height: 28.64px;

  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logo});

  ${mediaQuery.xs} {
    min-width: 122px;
    min-height: 25px;
  }
`;

const FooterText = styled.p`
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

export { Container, Header, Logo, Menu, Footer, FooterText };
