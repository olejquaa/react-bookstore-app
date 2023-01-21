import { useDispatch } from "react-redux";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo, logOutUser } from "store/slices/accountSlice";

// COMPONENT FOR TESTING STORE

export const Authorization = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAppSelector((state: any) => state.account);
  const handleClick = () => {
    dispatch(logOutUser);
  };

  return (
    <div>
      Authorization
      <button type="button" onClick={handleClick}>
        logout
      </button>
      auth: {isAuth ? "auth" : "ne auth"}
    </div>
  );
};
