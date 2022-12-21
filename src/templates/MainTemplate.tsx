import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { Container } from "../ui/mainTemplate";

export const MainTemplate = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
