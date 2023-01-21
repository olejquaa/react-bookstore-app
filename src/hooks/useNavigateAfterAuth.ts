import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppSelector } from "store";
import { isAuthSelector } from "store/selectors/selectors";

export const useNavigateAfterAuth = (path: ROUTE) => {
  const isAuth = useAppSelector(isAuthSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate(path);
    }
  }, [isAuth]);
};
