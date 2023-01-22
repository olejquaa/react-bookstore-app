import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { isAuthSelector, useAppSelector } from "store";

export const useNavigateAfterAuth = (path: ROUTE) => {
  const isAuth = useAppSelector(isAuthSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate(path);
    }
  }, [isAuth]);
};
