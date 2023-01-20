import { useDispatch } from "react-redux";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo, toggleAuth } from "store/slices/accountSlice";

// COMPONENT FOR TESTING STORE

export const Authorization = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAppSelector((state: any) => state.account);
  const handleClick = () => {
    dispatch(toggleAuth());
  };

  return (
    <div>
      Authorization
      <button type="button" onClick={handleClick}>
        test
      </button>
      auth: {isAuth ? "auth" : "ne auth"}
    </div>
  );
};
