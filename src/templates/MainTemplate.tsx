import { Outlet } from "react-router-dom";
import { Footer, Header } from "components";
import { MainTemplateContainer, OutletContainer } from "ui";

export const MainTemplate = () => {
  return (
    <MainTemplateContainer>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </MainTemplateContainer>
  );
};
