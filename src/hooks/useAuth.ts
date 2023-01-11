import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, id }: any = useSelector<any>((state) => state.user);

  return {
    isAuth: !!email,
    id,
    email,
    token,
  };
}
