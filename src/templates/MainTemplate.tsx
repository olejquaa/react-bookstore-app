import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { Container } from "./styles";

export const MainTemplate = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
