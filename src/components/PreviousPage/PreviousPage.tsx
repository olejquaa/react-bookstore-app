import { arrowImage } from "assets";
import { useNavigate } from "react-router-dom";
import { ArrowContainer, ArrowImage } from "./styles";

export const PreviousPage = () => {
  const navigate = useNavigate();

  const handleArrow = () => {
    navigate(-1);
  };

  return (
    <ArrowContainer onClick={handleArrow}>
      <ArrowImage src={arrowImage} />
    </ArrowContainer>
  );
};
