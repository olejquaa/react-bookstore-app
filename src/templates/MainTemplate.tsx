import { Outlet } from "react-router-dom";
import { Footer, Header } from "components";
import { MainTemplateContainer } from "ui";

export const MainTemplate = () => {
  return (
    <MainTemplateContainer>
      <Header />
      <Outlet />
      <Footer />
    </MainTemplateContainer>
  );
};
