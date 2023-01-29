import { memo, useState } from "react";
import { useAppDispatch } from "store";
import { setThemeDark, setThemeLight } from "store";
import { ButtonTheme, StyledToggler } from "./styles";

export const ThemeToggler = memo(() => {
  const [title, setTitle] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const handleThemeLight = () => {
    setTitle((title) => !title);
    dispatch(setThemeLight());
  };
  const handleThemeDark = () => {
    setTitle((title) => !title);
    dispatch(setThemeDark());
  };

  return (
    <StyledToggler>
      {title && (
        <ButtonTheme onClick={handleThemeLight} title={title.toString()} whileTap={{ scale: 1.15 }}>
          {title && "Light"}
        </ButtonTheme>
      )}
      {!title && (
        <ButtonTheme onClick={handleThemeDark} title={title.toString()} whileTap={{ scale: 1.15 }}>
          {!title && "Yellow"}
        </ButtonTheme>
      )}
    </StyledToggler>
  );
});
