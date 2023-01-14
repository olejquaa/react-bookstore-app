import styled from "styled-components";
import { mediaQuery } from "./media";

const MainTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;
  max-width: 1120px;
  padding: 0px 40px;

  ${mediaQuery.xs} {
    padding: 0px 23px;
  }
`;

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 100%;
`;

export { MainTemplateContainer, OutletContainer };
