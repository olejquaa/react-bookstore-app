import styled from "styled-components";
import { Color, mediaQuery, typography } from "ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  ${mediaQuery.sm} {
    flex-direction: column;
  }
  ${mediaQuery.xs} {
    flex-direction: column;
  }
`;

export const SliderContainer = styled.div`
  display: block;
  max-width: 300px;
  margin: 20px;
  align-items: center;
  background-color: ${Color.RED};
`;

export const SlideContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Item = styled.div`
  display: block;
  flex-direction: column;
  text-align: center;
  max-width: 300px;
`;

export const Title = styled.div`
  ${typography.h3};
  padding-top: 10px;
`;

export const SubTitle = styled.div`
  ${typography.s1};
  padding: 20px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  padding: 0px;
`;

export const Button = styled.button`
  height: 30px;
  width: 70px;
  background-color: ${Color.PRYMARY};

  padding: 0;
  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;
