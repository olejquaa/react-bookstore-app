import styled from "styled-components";
import { Color, mediaQuery, space, typography } from "ui";

export const StyledCart = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  ${mediaQuery.md} {
    grid-template-columns: auto;
    justify-content: center;
  }
  ${mediaQuery.sm} {
    grid-template-columns: auto;
    justify-content: center;
  }
  ${mediaQuery.xs} {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  background: transparent;

  ${mediaQuery.sm} {
    flex-direction: column;
  }
  ${mediaQuery.xs} {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  ${typography.s1}
`;

export const Subtitle = styled.h1`
  ${typography.s1}
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
export const Count = styled.div`
  min-width: 25px;
  padding: 15px;
`;
export const CostContainer = styled.div`
  text-align: center;
  align-items: center;
  align-self: center;
  padding-right: 15px;
`;

export const Cost = styled.h1`
  min-width: 50px;
  padding: 40px;
  ${typography.h2};
  ${mediaQuery.lg} {
    ${typography.h3}
  }
  ${mediaQuery.md} {
    ${typography.h3}
  }
  ${mediaQuery.sm} {
    ${typography.s1}
  }
  ${mediaQuery.xs} {
    ${typography.s1}
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
`;

export const Button = styled.button`
  margin-top: ${space.desktop.lg};
  margin-bottom: ${space.desktop.lg};

  background-color: ${Color.WHITE};
  padding: 20px;
  border: none;
  ${typography.s1}

  ${mediaQuery.xs} {
    width: 100%;
    margin-top: ${space.desktop.lg};
    margin-bottom: ${space.desktop.lg};
    color: ${Color.WHITE};
    background-color: ${Color.PRYMARY};
    padding: 20px;
    border: none;
  }
`;

export const ButtonCount = styled.button`
  height: 20px;
  width: 30px;
  background-color: ${Color.PRYMARY};

  margin-top: ${space.desktop.lg};
  margin-bottom: ${space.desktop.lg};

  padding: 0;

  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;

export const Images = styled.img`
  background: ${Color.GREEN};
  max-width: 150px;
  margin: 15px;
`;
