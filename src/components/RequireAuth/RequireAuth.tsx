import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { RootState } from "store/store";

export const RequireAuth = () => {
  const { isAuth } = useSelector((state: RootState) => state.account);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
