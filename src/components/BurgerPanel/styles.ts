import styled from "styled-components";
import { Color, space, typography } from "ui";

interface IProps {
  open?: boolean;
  close?: boolean;
}

export const StyledList = styled.ul<IProps>`
  margin: 0 auto;
  list-style: none;
  z-index: 3;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    width: 375px;
    padding-top: 23px;
    text-align: center;
    color: ${Color.PRYMARY};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.4s ease-in-out;
    background-color: ${Color.GRAY};
  }
`;
export const Hr = styled.span`
  top: ${space.mobile.lg};
  margin: 0 auto;
  margin-top: 35px;
  width: 288px;
  height: 1px;
  background: ${Color.GRAY};
  margin-bottom: 20px;
  z-index: 3;
`;

export const Background = styled.div<IProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: ${({ open }) => (open ? "block" : "none")};
  width: 100%;
  height: 100vh;
  background-color: ${Color.PRYMARY};
  opacity: 0.4;
  z-index: 3;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${space.mobile.lg};
  padding-bottom: ${space.mobile.md};
  margin: 0 auto;
  width: 80%;
  background: transparent;
`;

export const Title = styled.h3`
  ${typography.h3}
  background: transparent;
  :hover {
    color: goldenrod;
    transition: all 0.4s;
  }
`;

export const Button = styled.button`
  height: 56px;
  width: 200px;
  background-color: ${Color.PRYMARY};

  padding: 0;
  border: none;

  ${typography.s1}
  color: ${Color.WHITE};
`;

export const ButtonForm = styled.form`
  display: flex;
  flex-direction: column;
  background: transparent;
`;

export const StyledLink = styled.link``;
