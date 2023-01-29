import { useWindowSize } from "hooks";
import { BurgerPanel } from "components/BurgerPanel/BurgerPanel";
import { useState } from "react";
import { StyledBurger } from "./styles";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width = 0 } = useWindowSize();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {width < 801 && (
        <>
          <StyledBurger open={isOpen} onClick={handleOpen}>
            <div></div>
            <div></div>
            <div></div>
          </StyledBurger>
          <BurgerPanel open={isOpen} close={handleClose} />
        </>
      )}
    </>
  );
};
