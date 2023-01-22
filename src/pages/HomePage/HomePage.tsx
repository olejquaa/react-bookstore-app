import { useEffect } from "react";
import { useAppDispatch } from "store";
import { getNewBooks } from "store/slices/bookSlice";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNewBooks());
  }, []);
  return <div>HomePage</div>;
};
