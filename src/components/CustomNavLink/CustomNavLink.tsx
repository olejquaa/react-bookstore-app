import { memo, ReactNode } from "react";
import { NavLink } from "react-router-dom";
interface IProps {
  children: ReactNode;
  to: string;
  onClick?: () => void;
}

export const CustomNavLink = memo(({ children, to }: IProps) => {
  return <NavLink to={to}>{children}</NavLink>;
});
