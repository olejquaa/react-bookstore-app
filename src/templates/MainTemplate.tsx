import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../ui";
import { Container, Footer, FooterText, Header, Logo, Menu } from "./styles";

export const MainTemplate = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Logo></Logo>
        <div>Search component</div>
        <Menu>Menu icons</Menu>
      </Header>
      <Outlet />

      <Footer>
        <FooterText>©2022 Bookstore</FooterText>
        <FooterText>All right reserved</FooterText>
      </Footer>
    </Container>
  );
};
