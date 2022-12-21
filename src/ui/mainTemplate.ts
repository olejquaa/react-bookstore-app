import styled from "styled-components";
import { mediaQuery } from "./media";

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

export { Container };
