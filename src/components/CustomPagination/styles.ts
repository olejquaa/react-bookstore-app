import styled from "styled-components";
import { Color } from "ui";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;

  padding: 20px;
`;

export const NextPageButton = styled.div`
  display: flex;
  background-repeat: no-repeat;

  align-items: center;

  cursor: pointer;
`;

export const PreviousPageButton = styled.div`
  display: flex;

  background-repeat: no-repeat;
  align-items: center;

  cursor: pointer;
`;

export const NextArrowImage = styled.img`
  width: 100px;
  height: 30px;
`;

export const PrevArrowImage = styled.img`
  width: 100px;
  height: 30px;
  transform: rotate(180deg);
`;

export const Pages = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;

export const Page = styled.li`
  box-sizing: border-box;
  padding: 2px;

  cursor: pointer;
`;

export const CurrentPage = styled.li`
  box-sizing: border-box;
  padding: 2px;
  color: ${Color.PRYMARY};

  cursor: pointer;
`;
