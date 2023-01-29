import styled from "styled-components";
import { mediaQuery } from "./media";

const MainTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;
  min-height: 100vh;

  padding: 0px 40px;

  ${mediaQuery.xxl} {
    max-width: 1024px;
  }
  ${mediaQuery.xl} {
    max-width: 986px;
  }

  ${mediaQuery.lg} {
    max-width: 687px;
  }
  ${mediaQuery.md} {
    max-width: 687px;
  }
  ${mediaQuery.sm} {
    max-width: 271px;
  }

  ${mediaQuery.xs} {
    max-width: 271px;
    padding: 0px 23px;
  }
`;

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 120px;

  height: 100%;
  width: 100%;
`;

export { MainTemplateContainer, OutletContainer };
