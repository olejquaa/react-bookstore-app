import { logOutUser, useAppDispatch } from "store";
import { Button, StyledLogOut } from "./styles";

export const LogOut = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <StyledLogOut>
      <Button onClick={handleLogOut}> Log out </Button>
    </StyledLogOut>
  );
};
