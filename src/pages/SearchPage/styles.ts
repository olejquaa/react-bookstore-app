import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const SearchPageContainer = styled(motion.div)`
  display: grid;
  max-width: 1120px;
  width: 100%;
  z-index: 2;
`;

export const StyledSearch = styled.section``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  width: 100%;
`;

export const Previous = styled.button`
  margin-top: 30px;
  font-size: 21px;
  color: ${Color.SECONDARY};
  background-color: transparent;
  border: none;
  &:hover {
    color: ${Color.PRYMARY};
  }
`;

export const Next = styled.button`
  margin-top: 30px;
  font-size: 21px;
  color: ${Color.SECONDARY};
  background-color: transparent;
  border: none;
  &:hover {
    color: ${Color.PRYMARY};
  }
`;

export const PrevText = styled.span`
  margin-left: 30px;
`;

export const NextText = styled.span`
  margin-right: 30px;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;
