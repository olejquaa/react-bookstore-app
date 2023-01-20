import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";

export const RequireAuth = () => {
  const { isAuth } = useSelector((state: any) => state.account);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
