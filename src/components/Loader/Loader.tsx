import { FallingLines } from "react-loader-spinner";
import { Color } from "ui";
import { LoaderContainer } from "./styles";

export const Loader = () => {
  return (
    <LoaderContainer>
      <FallingLines color={Color.PRYMARY_LIGHT} width="200" visible={true} />;
    </LoaderContainer>
  );
};
